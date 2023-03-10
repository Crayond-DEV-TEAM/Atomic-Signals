import React from "react";
import { AutoSuggestTypeA } from "./index";

export default {
  title: 'AutoSuggestTypeA',
  component: AutoSuggestTypeA
};

const Template = args => <AutoSuggestTypeA {...args} />

export const Default = Template.bind({});
Default.args = {
  children: 'AutoSuggest',
  disabled: false,
  suggestType:"typeA",
  error:false
}

export const AutosuggestTypeA = Template.bind({});
AutosuggestTypeA.args = {
  children: 'AutoSuggestTypeA',
  disabled: false,
  suggestType:"typeA",
  error:false
}

export const AutosuggestTypeB = Template.bind({});
AutosuggestTypeB.args = {
  children: 'AutosuggestTypeB',
  disabled: false,
  error:false,
  suggestType:"typeB"

}

export const AutosuggestTypeC = Template.bind({});
AutosuggestTypeC.args = {
  children: 'AutosuggestTypeC',
  disabled: false,
  error:false,
  suggestType:"typeC"

}