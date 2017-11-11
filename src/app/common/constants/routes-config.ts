import { environment } from '../../../environments/environment';
import { API_PARAMS } from './Defines';
export const API_URLS = {
    'Flicker': {
        'GET': environment.baseUrlFlickr +
        `?method=flickr.photos.search&api_key=${API_PARAMS.KEY}&user_id={user_id_value}&tags={tags}&sort=interestingness-desc&per_page={number_per_page}&format=json&nojsoncallback=1&extras=date_upload,date_taken,owner_name,views,url_q&page={pageNum}`
    }
}

