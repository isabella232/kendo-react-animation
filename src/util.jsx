import assign from 'object-assign';

const animationType = {
    'appear': 'appear',
    'enter': 'enter',
    'leave': 'leave'
};

const capitilize = (value) => {
    if (!value) {
        return value;
    }

    const valueArray = [ ...value ];
    const firstLetter = valueArray.shift();

    return `${firstLetter.toUpperCase()}${valueArray.join('')}`;
};

const getTransitionClasses = (name, type) => {
    const className = name[type] || `${name}-${type}`;

    return {
        className: className,
        activeClassName: name[`${type}Active`] || `${className}-active`
    };
};

const getAnimationField = (type) => (`${type}AnimationId`);
const getTimeoutField = (type) => (`${type}TimeoutId`);

const guid = function() {
    let id = "";
    let random;

    for (let i = 0; i < 32; i++) {
        random = Math.random() * 16 | 0;

        if (i === 8 || i === 12 || i === 16 || i === 20) {
            id += "-";
        }

        /*eslint no-nested-ternary:0*/
        id += (i === 12 ? 4 : (i === 16 ? (random & 3 | 8) : random)).toString(16);
    }

    return id;
};

const mapTransitionClass = (name, inputName, outputName) => {
    const className = name[inputName] || `${name}-${outputName}`;

    return {
        [outputName]: className,
        [`${outputName}Active`]: name[`${inputName}Active`] || `${className}-active`
    };
};

const mapTransitionClasses = (name, inputNames, outputNames) => {
    const mappedClasses = inputNames.map((_, idx) => (
        mapTransitionClass(name, inputNames[idx], outputNames[idx])
    ));

    return assign({}, ...mappedClasses);
};

const outerHeight = (element) => {
    if (!element) {
        return 0;
    }

    const wnd = element.ownerDocument.defaultView;
    const computedStyles = wnd.getComputedStyle(element);
    const marginTop = parseFloat(computedStyles.marginTop, 10);
    const marginBottom = parseFloat(computedStyles.marginBottom, 10);

    return element.offsetHeight + marginTop + marginBottom;
};

const outerWidth = (element) => {
    if (!element) {
        return 0;
    }

    const wnd = element.ownerDocument.defaultView;
    const computedStyles = wnd.getComputedStyle(element);
    const marginLeft = parseFloat(computedStyles.marginLeft, 10);
    const marginRight = parseFloat(computedStyles.marginRight, 10);

    return element.offsetWidth + marginLeft + marginRight;
};

const noop = function() {};

export default {
    animationType: animationType,
    capitilize: capitilize,
    getTransitionClasses: getTransitionClasses,
    getAnimationField: getAnimationField,
    getTimeoutField: getTimeoutField,
    guid: guid,
    mapTransitionClasses: mapTransitionClasses,
    noop: noop,
    outerHeight: outerHeight,
    outerWidth: outerWidth
};
