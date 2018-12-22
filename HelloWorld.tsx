import * as React from 'react';

interface IProps {
    name: string;
    surname: string;
}

const HelloWorld = ({name, surname}: IProps) =>
    <div>{`Hello ${name} ${surname}`}</div>

export default HelloWorld;