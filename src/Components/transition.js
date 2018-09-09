import React from 'react';
import {TransitionMotion, spring, presets} from 'react-motion';

export default function Transition (props) {
    let defaultStyles = [], styles = [];
    const {children} = props;

    React.Children.map(children, (child)=>{
        if(child){
            defaultStyles.push({
                key: child.key,
                data: child,
                style: {height: 0, opacity: spring(1, presets.gentle)}
            });

            styles.push({
                key: child.key,
                data: child,
                style: {height: spring(72, presets.gentle), opacity: spring(1, presets.gentle)}
            })
        }
    });

    function willEnter() {
        return {height: 0, opacity: 1}
    }

    function willLeave() {
        return {height: spring(0, presets.gentle), opacity: 0}
    }

    return(
        <TransitionMotion styles={styles} willLeave={willLeave} defaultStyles={defaultStyles} children={props.children}>
            {
                (styles)=>{
                    return(
                        <div className="flex-center-container">
                            {
                                styles.map((child)=>{
                                    if(child){
                                        let {key, data, style} = child;
                                        style = style
                                        return React.cloneElement(
                                            data,
                                            {key, style}
                                        )
                                    }else{
                                        return null
                                    }

                                })
                            }
                        </div>
                    )
                }
            }
        </TransitionMotion>
    )
};

