import { DiscreteSlider } from ".";



export default {
  title: 'Components/Slider',
  component: DiscreteSlider
};

const Template = args => <DiscreteSlider {...args} />

export const Default = Template.bind({});

Default.args = {
  disabled:false,
  marks : [
    {
      value: 0,
    },
    {
      value: 16,
    },
    {
      value: 33.32,
    },
    {
      value: 49.98,
    },
    {
      value: 66.64,
    },
    {
      value: 83.3,
    },
    {
      value: 99.96,
    }
  ],
  name:""

}

