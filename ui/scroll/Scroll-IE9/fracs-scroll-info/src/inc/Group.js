
(function (window, $, undefined) {

    var Fracs = window.Fracs = window.Fracs || {},
        fracsProps = ["possible", "visible", "viewport"],
        rectProps = ["width", "height", "left", "right", "top", "bottom"],
        propertyType = function (property) {

            if ($.inArray(property, fracsProps) >= 0) {
                return "fracs";
            } else if ($.inArray(property, rectProps) >= 0) {
                return "rect";
            }
        },
        betterMax = function (value, bestValue) {

            return value > bestValue;
        },
        betterMin = function (value, bestValue) {

            return value < bestValue;
        },
        best = function (elements, property, betterFn) {

            var bestElements, bestValue,
                type = propertyType(property);

            if (!type) {
                return {elements: [], value: undefined};
            }

            $.each(elements, function (idx, element) {

                var value;

                element.update();
                value = type === "fracs" ? element.fracs[property] : element.rect[property];

                if (bestValue === undefined || betterFn(value, bestValue)) {
                    bestElements = [element];
                    bestValue = value;
                } else if (value === bestValue) {
                    bestElements.push(element);
                }
            });

            return {elements: bestElements, value: bestValue};
        },
        htmlElementsToElements = function (htmlElements) {

            var elements = [];

            $.each(htmlElements, function (idx, htmlElement) {
                elements.push(Fracs.Element(htmlElement));
            });
            return elements;
        },
        elementsToHtmlElements = function (elements) {

            var htmlElements = [];

            $.each(elements, function (idx, element) {
                htmlElements.push(element.element);
            });
            return htmlElements;
        };


    Fracs.Group = function (htmlElements) {

        if (!(this instanceof Fracs.Group)) {
            return new Fracs.Group(htmlElements);
        }

        this.elements = htmlElementsToElements(htmlElements);
    };

    Fracs.Group.prototype = {
        max: function (property, asHTMLElements) {

            var result = best(this.elements, property, betterMax);
            return asHTMLElements === true ? elementsToHtmlElements(result.elements) : result;
        },
        min: function (property, asHTMLElements) {

            var result = best(this.elements, property, betterMin);
            return asHTMLElements === true ? elementsToHtmlElements(result.elements) : result;
        }
    };

}(window, jQuery));
