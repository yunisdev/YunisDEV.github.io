import React from 'react'
import {
    Create,
    Edit,
    TextInput,
    SimpleForm,
    List,
    Datagrid,
    TextField,
    required,
    Show,
    SimpleShowLayout,
    ShowButton,
    EditButton,
    DeleteButton
} from 'react-admin';

export const SocialList = (props) => {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source="id" />
                <TextField source="name" />
                <TextField source="color" />
                <TextField source="url" />
                <ShowButton label="" />
                <EditButton label="" />
                <DeleteButton label="" redirect={false} />
            </Datagrid>
        </List>
    )
}

export const SocialCreate = (props) => {
    return (
        <Create {...props}>
            <SimpleForm>
                <TextInput source="id" />
                <TextInput source="name" />
                <TextInput source="color" />
                <TextInput source="url" />
                <TextInput source="icon" multiline={true}/>
            </SimpleForm>
        </Create>
    )
}

export const SocialEdit = (props) => {
    return (
        <Edit {...props}>
            <SimpleForm>
                <TextInput disabled label="Id" source="id" />
                <TextInput source="name" validate={required()} />
                <TextInput source="color" validate={required()} />
                <TextInput source="url" validate={required()} />
                <TextInput source="icon" validate={required()} multiline={true}/>
            </SimpleForm>
        </Edit>
    )
}

export const SocialShow = (props) => {
    return (
        <Show title="Social View" {...props}>
            <SimpleShowLayout>
                <TextField source="id" />
                <TextField source="name" />
                <TextField source="color" />
                <TextField source="url" />
                <TextField source="icon" />
            </SimpleShowLayout>
        </Show>
    )
}