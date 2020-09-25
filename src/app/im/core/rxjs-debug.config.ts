import {environment} from '../../../environments/environment';
import {tap} from 'rxjs/operators';
import {pipe} from 'rxjs';

export const debug = (descriptions: string) => pipe(
    tap(
        (next) => {
            if (!environment.production) {
                console.log(descriptions, next);
            }
        },
        (err) => {
            if (!environment.production) {
                console.error('ERROR >>', descriptions, err);
            }
        },
        () => {
            if (!environment.production) {
                console.log('Completed - ');
            }
        }
    )
);
