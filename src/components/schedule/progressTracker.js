import React, { Component } from 'react'

export default class ProgressTracker extends Component {
    render() {
        return (
            <div className="progress-tracker">
                <label className="progress-trakcer__label">Progress Tracker</label>
                <div className="progress-trakcer__percentage">
                    0%
                </div>
            </div>
        );
    }
}