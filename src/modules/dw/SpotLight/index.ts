import {IDB} from '@devinit/graphql-next/lib/db';
import {getOverViewTabRegional, ISpotlightArgs} from './lib/utils';
import Uganda from './lib/uganda';
import Kenya from './lib/kenya';

export default class SpotLight {
    public uganda: Uganda;
    public kenya: Kenya;
    public getOverViewTabRegional: (args: ISpotlightArgs) => Promise<DH.IOverviewTabRegional>;
    constructor(db: IDB) {
        this.uganda = new Uganda(db);
        this.kenya = new Kenya(db);
        this.getOverViewTabRegional = getOverViewTabRegional(db);
    }
}
