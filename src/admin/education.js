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

export const EducationList = (props) => {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source="id" />
                <TextField source="name" />
                <TextField source="desc" label="Description" />
                <TextField source="date" />
                <ShowButton label="" />
                <EditButton label="" />
                <DeleteButton label="" redirect={false} />
            </Datagrid>
        </List>
    )
}

export const EducationCreate = (props) => {
    return (
        <Create {...props}>
            <SimpleForm>
                <TextInput source="id" />
                <TextInput source="name" />
                <TextInput source="desc" label="Description" />
                <TextInput source="date" />
            </SimpleForm>
        </Create>
    )
}

export const EducationEdit = (props) => {
    return (
        <Edit {...props}>
            <SimpleForm>
                <TextInput disabled label="Id" source="id" />
                <TextInput source="name" validate={required()} />
                <TextInput source="desc" validate={required()} label="Description" />
                <TextInput source="date" validate={required()} />
            </SimpleForm>
        </Edit>
    )
}

export const EducationShow = (props) => {
    return (
        <Show title="Education View" {...props}>
            <SimpleShowLayout>
                <TextField source="id" />
                <TextField source="name" />
                <TextField source="desc" label="Description" />
                <TextField source="date" />
            </SimpleShowLayout>
        </Show>
    )
}