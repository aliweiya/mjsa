/* 
 * @Author: Allen
 * @Date:   2016-01-13 09:37:24
 * @Last Modified by:   Allen
 * @Last Modified time: 2016-09-27 09:37:08
 */
'use strict';
require(['ut', 'purl', "moment", "text!tpl/projectTab.html", "text!tpl/businessModel.html", "text!tpl/projectTeams.html", "text!tpl/projectPerformances.html", "text!tpl/projectSchedules.html", "text!tpl/projectAttachments.html", "text!tpl/projectDynamics.html", "loading"],
    function(UT, purl, moment, projectTab, businessModel, projectTeams, projectPerformances, projectSchedules, projectAttachments, projectDynamics) {
        // 插入总模板
        $(function() {
            $("#projectTab").html(projectTab);

            $(".tab-pane").isLoading({
                text: "",
                position: "overlay"
            });
            // CFMyProjects/MyProject/55 及 CFProject/GetProjectBasis?id=7 不统一参数
            var url = purl();
            var bid = url.param("id") || url.segment(-1);

            // 商业模式
            var optBusinessModel = {
                "baseUrl": ucConfig.ServerReferenceProjectCenterAPI,
                "dataType": 'jsonp',
                "name": '/CFProject/GetProjectBusinessModel',
                "data": {
                    id: bid
                }
            };


            UT.jaxJson(optBusinessModel).then(function(data) {

                var template = _.template(businessModel);

                var tempdata = {
                    "item": data.Data
                };
                $(".tab-pane").isLoading("hide");

                $('#GetProjectBusinessModel').empty().append(template(tempdata));

            });

            // 股东团队
            var optProjectTeams = {
                "baseUrl": ucConfig.ServerReferenceProjectCenterAPI,
                "dataType": 'jsonp',
                "name": '/CFProject/GetProjectTeams',
                "data": {
                    id: bid
                }
            };

            UT.jaxJson(optProjectTeams).then(function(data) {
                _.each(data.Data, function(v){
                    v.Stake = v.Stake.toFixed(2);
                    v.InvestmentAmount = v.InvestmentAmount.toFixed(2);
                });
                var template = _.template(projectTeams);
                var tempdata = {
                    "datas": data.Data
                };

                $('#GetProjectTeams tbody').empty().append(template(tempdata));
            });

            // 历史情况
            var optProjectPerformances = {
                "baseUrl": ucConfig.ServerReferenceProjectCenterAPI,
                "dataType": 'jsonp',
                "name": '/CFProject/GetProjectPerformances',
                "data": {
                    id: bid
                }
            };

            UT.jaxJson(optProjectPerformances).then(function(data) {
                var template = _.template(projectPerformances);

                _.each(data.Data, function(v, i) {
                    v.Amounts = (function() {
                        var cadd = 0,
                            csub = 0;
                        _.each(v.Accountings, function(k) {
                            if (k.Amount >= 0) {
                                cadd += k.Amount;
                            } else {
                                csub += k.Amount;
                            }

                        });
                        return {
                            cadd: cadd,
                            csub: csub
                        }
                    })();
                    v.StartDate = moment(v.StartDate).format("YYYY-MM-DD HH:mm:ss");
                    v.FinishTime = moment(v.FinishTime).format("YYYY-MM-DD HH:mm:ss");
                });

                var tempdata = {
                    "datas": data.Data
                };

                $('#GetProjectPerformances .info').empty().append(template(tempdata));
            });

            // 未来计划
            var optProjectSchedules = {
                "baseUrl": ucConfig.ServerReferenceProjectCenterAPI,
                "dataType": 'jsonp',
                "name": '/CFProject/GetProjectSchedules',
                "data": {
                    id: bid
                }
            };

            UT.jaxJson(optProjectSchedules).then(function(data) {
                var template = _.template(projectSchedules);
                _.each(data.Data, function(v, i) {
                    v.Amounts = (function() {
                        var cadd = 0,
                            csub = 0;
                        _.each(v.Accountings, function(k) {
                            if (k.Amount >= 0) {
                                cadd += k.Amount;
                            } else {
                                csub += k.Amount;
                            }

                        });
                        return {
                            cadd: cadd,
                            csub: csub
                        }
                    })();
                });
                var tempdata = {
                    "datas": data.Data
                };

                $('#GetProjectSchedules .info').empty().append(template(tempdata));
            });

            // 项目附件
            var optProjectAttachments = {
                "baseUrl": ucConfig.ServerReferenceProjectCenterAPI,
                "dataType": 'jsonp',
                "name": '/CFProject/GetProjectAttachments',
                "data": {
                    id: bid
                }
            };

            UT.jaxJson(optProjectAttachments).then(function(data) {
                var template = _.template(projectAttachments);

                _.each(data.Data, function(v, i) {
                    v.Icon = ucConfig.ServerReferenceFileCenterAPI + "/fileupload/ImgDownload/" + v.Icon;
                });


                var tempdata = {
                    "datas": data.Data
                };

                $('#GetProjectAttachments .tab1 tbody').empty().append(template(tempdata));
            });

            // 项目动态
            var optProjectDynamics = {
                "baseUrl": ucConfig.ServerReferenceProjectCenterAPI,
                "dataType": 'jsonp',
                "name": '/CFProject/GetProjectDynamics',
                "data": {
                    id: bid
                }
            };

            UT.jaxJson(optProjectDynamics).then(function(data) {
                var template = _.template(projectDynamics);
                var tempdata = {
                    "datas": data.Data
                };

                $('#GetProjectDynamics').empty().append(template(tempdata));
            });

        });
    });
