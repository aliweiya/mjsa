#! /bin/sh
# 2015-04-08 wsc
# chkconfig: 2345 55 25
# Description: Startup script for uwsgi webserver on Debian. Place in /etc/init.d and
# run 'update-rc.d -f uwsgi defaults', or use the appropriate command on your
# distro. For CentOS/Redhat run: 'chkconfig --add uwsgi'
 
PATH=/usr/local/sbin:/usr/local/bin:/sbin:/bin:/usr/sbin:/usr/bin
# 脚本描述
DESC="cn_wsgi daemon"
# 启动的脚本文件名
NAME=cn_wsgi
# 守护进程执行文件 
DAEMON=/usr/local/bin/uwsgi
# 指定配置文件路径
CONFIGFILE=/home/artmalluser/oscar/artmall/$NAME.ini
# 指定 pid 文件路径
PIDFILE=/home/artmalluser/run/$NAME.pid
# 启动的脚本路径
SCRIPTNAME=/etc/init.d/$NAME
 
set -e
[ -x "$DAEMON" ] || exit 0
 
do_start() {
    $DAEMON $CONFIGFILE || echo -n "uwsgi already running"
}
 
do_stop() {
    $DAEMON --stop $PIDFILE || echo -n "uwsgi not running"
    rm -f $PIDFILE
    echo "$DAEMON STOPED."
}
 
do_reload() {
    $DAEMON --reload $PIDFILE || echo -n "uwsgi can't reload"
}
 
do_status() {
    ps aux|grep $DAEMON
}
 
case "$1" in
 status)
    echo -en "Status $NAME: \n"
    do_status
 ;;
 start)
    echo -en "Starting $NAME: \n"
    do_start
 ;;
 stop)
    echo -en "Stopping $NAME: \n"
    do_stop
 ;;
 reload|graceful)
    echo -en "Reloading $NAME: \n"
    do_reload
 ;;
 *)
    echo "Usage: $SCRIPTNAME {start|stop|reload}" >&2
    exit 3
 ;;
esac
 
exit 0

#!/bin/bash
### BEGIN INIT INFO
# Provides:          uwsgi
# Required-Start:    $local_fs $remote_fs $network
# Required-Stop:     $local_fs $remote_fs $network
# Default-Start:     2 3 4 5
# Default-Stop:      0 1 6
# Short-Description: Start/stop uWSGI server instance(s)
# Description:       This script manages uWSGI server instance(s).
#                    You could control specific instance(s) by issuing:
#                    
#                        service uwsgi <command> <confname> <confname> ...
#                    
#                    You can issue to init.d script following commands:
#                      * start        | starts daemon
#                      * stop         | stops daemon
#                      * reload       | sends to daemon SIGHUP signal
#                      * force-reload | sends to daemon SIGTERM signal
#                      * restart      | issues 'stop', then 'start' commands
#                      * status       | shows status of daemon instance
#                    
#                    'status' command must be issued with exactly one
#                    argument: '<confname>'.
#                    
#                    In init.d script output:
#                      * . -- command was executed without problems or instance
#                             is already in needed state
#                      * ! -- command failed (or executed with some problems)
#                      * ? -- configuration file for this instance isn't found
#                             and this instance is ignored
#                    
#                    For more details see /usr/share/doc/uwsgi/README.Debian.
### END INIT INFO

# Author: Leonid Borisenko <leo.borisenko@gmail.com>

# PATH should only include /usr/* if it runs after the mountnfs.sh script
PATH=/sbin:/usr/sbin:/bin:/usr/bin
DESC="app server(s)"
NAME="uwsgi"
DAEMON="/usr/bin/uwsgi"
SCRIPTNAME="/etc/init.d/${NAME}"

UWSGI_CONFDIR="/etc/uwsgi"
UWSGI_APPS_CONFDIR_SUFFIX="s-enabled"
UWSGI_APPS_CONFDIR_GLOB="${UWSGI_CONFDIR}/app${UWSGI_APPS_CONFDIR_SUFFIX}"

UWSGI_RUNDIR="/run/uwsgi"

# Configuration namespace is used as name of runtime and log subdirectory.
# uWSGI instances sharing the same app configuration directory also shares
# the same runtime and log subdirectory.
#
# When init.d script cannot detect namespace for configuration file, default
# namespace will be used.
UWSGI_DEFAULT_CONFNAMESPACE=app

# Exit if the package is not installed
[ -x "$DAEMON" ] || exit 0

# Load the VERBOSE setting and other rcS variables
. /lib/init/vars.sh

# Read configuration variable file if it is present
[ -r "/etc/default/${NAME}" ] && . "/etc/default/${NAME}"

# Define LSB log_* functions.
# Depend on lsb-base (>= 3.0-6) to ensure that this file is present.
. /lib/lsb/init-functions

# Define supplementary functions
. /usr/share/uwsgi/init/snippets
. /usr/share/uwsgi/init/do_command

WHAT=$1
shift
case "$WHAT" in
  start)
    [ "$VERBOSE" != no ] && log_daemon_msg "Starting $DESC" "$NAME"
    do_command "$WHAT" "$@"
    RETVAL="$?"
    [ "$VERBOSE" != no ] && log_end_msg "$RETVAL"
  ;;

  stop)
    [ "$VERBOSE" != no ] && log_daemon_msg "Stopping $DESC" "$NAME"
    do_command "$WHAT" "$@"
    RETVAL="$?"
    [ "$VERBOSE" != no ] && log_end_msg "$RETVAL"
  ;;

  status)
    if [ -z "$1" ]; then
      [ "$VERBOSE" != no ] && log_failure_msg "which one?"
    else
      PIDFILE="$(
        find_specific_pidfile "$(relative_path_to_conffile_with_spec "$1")"
      )"
      status_of_proc -p "$PIDFILE" "$DAEMON" "$NAME" \
        && exit 0 \
        || exit $?
    fi
  ;;

  reload)
    [ "$VERBOSE" != no ] && log_daemon_msg "Reloading $DESC" "$NAME"
    do_command "$WHAT" "$@"
    RETVAL="$?"
    [ "$VERBOSE" != no ] && log_end_msg "$RETVAL"
  ;;

  force-reload)
    [ "$VERBOSE" != no ] && log_daemon_msg "Forced reloading $DESC" "$NAME"
    do_command "$WHAT" "$@"
    RETVAL="$?"
    [ "$VERBOSE" != no ] && log_end_msg "$RETVAL"
  ;;

  restart)
    [ "$VERBOSE" != no ] && log_daemon_msg "Restarting $DESC" "$NAME"
    CURRENT_VERBOSE=$VERBOSE
    VERBOSE=no
    do_command stop "$@"
    VERBOSE=$CURRENT_VERBOSE
    case "$?" in
      0)
        do_command start "$@"
        RETVAL="$?"
        [ "$VERBOSE" != no ] && log_end_msg "$RETVAL"
      ;;
      *)
        # Failed to stop
        [ "$VERBOSE" != no ] && log_end_msg 1
      ;;
    esac
  ;;

  *)
    echo "Usage: $SCRIPTNAME {start|stop|status|restart|reload|force-reload}" >&2
    exit 3
  ;;
esac
