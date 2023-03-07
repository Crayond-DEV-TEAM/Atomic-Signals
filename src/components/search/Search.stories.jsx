import SearchField from ".";


export default {
    title: 'Search',
    component: SearchField
};

const Template = args => <SearchField {...args} />

export const SearchBox = Template.bind({});

SearchBox.args = {
    variant: 'outlined',
    placeholder: 'Search by name',
    disabled: false,
    type: "search"
}