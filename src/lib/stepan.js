export default class Stepan {
  static createElement(element, parent, attributes = {}) {
    // TODO: check if this is a valid tag name

    if (!Stepan.Validation.isValid(element)) {
      throw Stepan.StepanError.InvalidTagName()
    }
    const newElement = document.createElement(element);

    const { innerHTML, innerText } = attributes;

    for (let attribute in attributes) {
      if (['innerHTML', 'innerText'].includes(attribute)) {
        continue;
      }

      newElement.setAttribute(attribute, attributes[attribute]);
    }

    innerHTML && (newElement.innerHTML = innerHTML);
    innerText && (newElement.innerText = innerText);

    parent.appendChild(newElement);

    return newElement;
  }

}

Stepan.Component = class {
  constructor(parent) {

    // TODO: 1. Create StepanError class to define all framework errors
    //       2. throw an error if parent is null or undefined, or if it's not a valid DOM object

    if (parent === undefined || parent === null) {
      Stepan.StepanError.NULLParentError()
    }
    if (!Stepan.Validation.isElement(parent)) {
      Stepan.StepanError.InvalidDOM();
    }
    this.parent = parent;
  }

  // TODO (Bonus): Ensure that every component returns a top-level root element
};


Stepan.StepanError = class {
  static InvalidTagName() {
    throw  'Invalid name of html tag'
  }
  static InvalidDOM() {
    throw 'It is not a valid DOM object'
  }
  static NULLParentError() {
    throw 'Parent is null or undefined'
  }
};

Stepan.Validation = class {
  static isValid(element) {
    return document.createElement(element).toString() !== "[object HTMLUnknownElement]";
  }
  static isElement(element) {
    return element instanceof Element || element instanceof HTMLDocument;
  }
};


