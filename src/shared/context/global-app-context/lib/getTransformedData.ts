import { AppContext, FetchContextData } from '../types';

export async function getTransformedData(fetchedContextData: FetchContextData) {
    return fetchedContextData.reduce<Promise<AppContext>>(async (previousValue, currentValue) => {
        if (currentValue.status !== 'fulfilled') return previousValue;

        const [fetchedDataName, fetchedData] = Object.entries(currentValue.value)[0];
        const currentContext = await previousValue;

        return { ...currentContext, [fetchedDataName as keyof AppContext]: await fetchedData };
        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    }, {} as Promise<AppContext>);
}
