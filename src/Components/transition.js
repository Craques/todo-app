import React, {Component} from 'react';
import {TransitionMotion, spring} from 'react-motion';

export default function Transition (props) {
    let defaultStyles = [], styles = [];
    const {children} = props;
    const config = { stiffness: 140, damping: 14 };

    React.Children.map(children, (child)=>{

        if(child){
            defaultStyles.push({
                key: child.key,
                data: child,
                style: {opacity: 0, scale: 0}
            });

            styles.push({
                key: child.key,
                data: child,
                style: {opacity: spring(1), scale: spring(1, config)}
            })
        }
    });

    function willEnter() {
        return {opacity: 0, scale: 0}
    }

    function willLeave() {
        return {opacity: spring(0, {stiffness: 90, damping: 11 })}
    }

    return(
        <TransitionMotion styles={styles} defaultStyles={defaultStyles} children={props.children}>
            {
                (styles)=>{
                    return(
                        <div className="flex-center-container">
                            {
                                styles.map((child)=>{
                                    if(child){
                                        let {key, data, style} = child;
                                        style = {...style, transform: `scale(${style.scale})` }
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

