import {Pipe} from 'angular2/core';

@Pipe({
  name: 'groupByFilter'
})
export class GroupByFilter
{
  transform(value: number, args: any[] = null) : any {
    return Object.keys(value).map(function(key) {
            let pair = {};
            let k = 'key';
            let v = 'value'


            pair[k] = key;
            pair[v] = value[key];

            return pair;
        });
  }
}
