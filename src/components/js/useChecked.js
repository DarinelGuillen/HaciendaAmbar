import { useState } from 'react';

export const useChecked = (initialState) => {

    const [checked, setChecked] = useState(initialState);

    const handleClickCheckBox = ({ target }, id) => {
        if (target) {
            setChecked({
                ...checked,
                [id]: !checked[id],
            });
        }
    }

    return [ checked, handleClickCheckBox ];
}
