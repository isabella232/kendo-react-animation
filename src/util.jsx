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

const getAnimationClasses = (name, type) => {
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

const noop = function() {};

export default {
    animationType: animationType,
    capitilize: capitilize,
    getAnimationClasses: getAnimationClasses,
    getAnimationField: getAnimationField,
    getTimeoutField: getTimeoutField,
    guid: guid,
    noop: noop
};
