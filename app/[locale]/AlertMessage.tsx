import React from 'react';

interface AlertMessageProps {
    message: string;
}

export default function AlertMessage({ message }: AlertMessageProps): JSX.Element {
    return (
        <div>
            <p>{message}</p>
        </div>
    );
}
