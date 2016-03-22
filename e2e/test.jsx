import React from 'react';
import ReactDOM from 'react-dom';
import Animation from '../src/Animation';

// e2e-utils is a module exposed from react-tasks
// it exports `$` and `withRoot` - higher order function for describe (example below)
import { withRoot } from 'e2e-utils';

// `root` parameter is a jQuery object which includes chai-jquery in it.
// chai-jquery adds a should method to the jQuery object.
// See https://github.com/chaijs/chai-jquery#assertions for available assertions.
describe('Animation', withRoot(root => {
    it('should size animation container when single element is animated', () => {
        const useSingle = true;
        let contentProps = {
            height: '200px',
            width: '100px'
        };

        let component = (
            <Animation single={useSingle}>
                <div style={contentProps}>
                    content
                </div>
            </Animation>
        );

        ReactDOM.render(component, root[0]);

        component = (
            <Animation single={useSingle}>
                <div style={contentProps}>
                    content
                </div>
            </Animation>
        );

        //render again to initiate animation
        ReactDOM.render(component, root[0]);

        root.find("div.k-animation-container").should.have.css('width', '100px');
        root.find("div.k-animation-container").should.have.css('height', '200px');
    });

    it('should skip animation container sizing if multiple elements are animated', () => {
        let contentProps = {
            height: '200px',
            width: '100px'
        };

        let component = (
            <Animation>
                <div style={contentProps}>content1</div>
            </Animation>
        );

        ReactDOM.render(component, root[0]);

        component = (
            <Animation>
                <div style={contentProps}>content1</div>
                <div style={contentProps}>content2</div>
            </Animation>
        );

        //render again to initiate animation
        ReactDOM.render(component, root[0]);

        root.find("div.k-animation-container").attr('style', undefined);
    });
}));
