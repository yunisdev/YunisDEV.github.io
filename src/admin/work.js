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

export const WorkList = (props) => {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source="id" />
                <TextField source="name" />
                <TextField source="desc" />
                <TextField source="date" />
                <ShowButton label="" />
                <EditButton label="" />
                <DeleteButton label="" redirect={false} />
            </Datagrid>
        </List>
    )
}

export const WorkCreate = (props) => {
    return (
        <Create {...props}>
            <SimpleForm>
                <TextInput source="id" />
                <TextInput source="name" />
                <TextInput source="desc" />
                <TextInput source="date" />
            </SimpleForm>
        </Create>
    )
}

export const WorkEdit = (props) => {
    return (
        <Edit {...props}>
            <SimpleForm>
                <TextInput disabled label="Id" source="id" />
                <TextInput source="name" validate={required()} />
                <TextInput source="desc" validate={required()} />
                <TextInput source="date" validate={required()} />
            </SimpleForm>
        </Edit>
    )
}

export const WorkShow = (props) => {
    return (
        <Show title="Work View" {...props}>
            <SimpleShowLayout>
                <TextField source="id" />
                <TextField source="name" />
                <TextField source="desc" />
                <TextField source="date" />
            </SimpleShowLayout>
        </Show>
    )
}