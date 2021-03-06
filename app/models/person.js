import DS from "ember-data";
import { Model } from 'ember-pouch';

export default Model.extend({
  name : DS.attr('string'),
  description: DS.attr('string'),
  forgiven : DS.attr('boolean', { defaultValue: false }),
  rev: DS.attr('string')
});
