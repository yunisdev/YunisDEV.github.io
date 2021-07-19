import React from 'react'
import { Admin, Resource } from 'react-admin'
import {
    FirebaseAuthProvider,
    FirebaseDataProvider,
} from 'react-admin-firebase';
import { firebaseConfig } from '../utils/firebase';
import { EducationList, EducationCreate, EducationEdit, EducationShow } from './education'
import { WorkList, WorkCreate, WorkEdit, WorkShow } from './work'
import { SocialList, SocialCreate, SocialEdit, SocialShow } from './social'
import firebase from '../utils/firebase'
import LoginPage from './LoginPage'

const options = {
    logging: true,
    app: firebase
}
const dataProvider = FirebaseDataProvider(firebaseConfig, options)
const authProvider = FirebaseAuthProvider(firebaseConfig, options);

const AdminApp = () => {
    return (
        <Admin dataProvider={dataProvider} authProvider={authProvider} loginPage={LoginPage}>
            <Resource
                name="education"
                list={EducationList}
                create={EducationCreate}
                edit={EducationEdit}
                show={EducationShow}
            />
            <Resource
                name="work"
                list={WorkList}
                create={WorkCreate}
                edit={WorkEdit}
                show={WorkShow}
            />
            <Resource
                name="social"
                list={SocialList}
                create={SocialCreate}
                edit={SocialEdit}
                show={SocialShow}
            />
        </Admin>
    );
}

export default AdminApp;