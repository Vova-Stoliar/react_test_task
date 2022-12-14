type Name = string | { [key: string]: boolean };

type GetClassNames = (...names: Name[]) => string;

// TODO: make error boundary

// TODO: refactor

export const getClassNames: GetClassNames = (...classNames) => {
    const classNamesToApply = classNames.reduce((previousValue: Name[], currentValue: Name) => {
        function getConditionalClassNames() {
            return Object.entries(currentValue).reduce((previousEL: string[], currentEL) => {
                const [className, shouldApplyClassName] = currentEL;

                if (shouldApplyClassName) return [...previousEL, className];

                return previousEL;
            }, []);
        }

        if (typeof currentValue === 'object') {
            const conditionalClassNames = getConditionalClassNames();

            return [...previousValue, ...conditionalClassNames];
        }

        return [...previousValue, currentValue];
    }, []);

    return classNamesToApply.join(' ');
};
