import React, { Component } from 'react'
import Icon from '../icon';
import Arrow from '../arrow';
import Action from '../action';

export default class LibraryCourse extends Component {
    render() {
        return (
            <div className="library-course">
                <div className="library-course__title-check">
                    <label className="lirary-course__title">Problem Solving</label>
                    {Icon('fas fa-check', 'library-course__icon')}
                </div>
                <Arrow className="library-course__arrow" />
                <Action className="library-course__action" />
                <div className="library-course__description">
                    <label>Course Description</label>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt enim non justo eleifend eleifend. Nam hendrerit, ligula ac consequat tincidunt, mauris ipsum tincidunt orci, et tincidunt mi justo a orci. </p>
                </div>
            </div>
        );
    }
}