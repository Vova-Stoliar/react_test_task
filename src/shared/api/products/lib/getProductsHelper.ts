import { PRODUCTS_PER_PAGE } from '@/shared/constants';
import { GetProductsPayload } from '../types';

export const getProductsHelper = () => {
    function getSearchparams(params: GetProductsPayload['params']) {
        const defaultParams = {
            _page: '1',
            _limit: String(PRODUCTS_PER_PAGE),
        };

        return new URLSearchParams(Object.assign(defaultParams, params));
    }

    function getTotalProductsCountFromHeader(response: Response) {
        const HEADER_TOTAL_COUNT_KEY = 'X-Total-Count';

        return Number(response.headers.get(HEADER_TOTAL_COUNT_KEY)) || 0;
    }

    return { getSearchparams, getTotalProductsCountFromHeader };
};
