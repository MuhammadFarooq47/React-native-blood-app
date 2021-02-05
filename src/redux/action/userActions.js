import db from '@react-native-firebase/database';
import uid from 'uuid'
const set_data = (data) => {
    return(dispatch) => {
        console.log('Dispatch Data', data)
      
        const get_data = {
            name: data.name,
            email: data.email,
            contact: data.contact,
            blood: data.blood,
            address: data.address
        }
        

    db().ref('users').push(get_data).then((ref) => {
        //dispatch({type: 'SET_DATA',payload: { data: data}})
        console.log('Ref', ref)
    }).catch((err) => {
        console.log('error', err)
    })

        console.log('get_Data ==>>>>>' ,get_data)
       
        
    }
};


const get_data = () => {
    return(dispatch) => {
        db().ref('users').on('child_added', (data) => {
            dispatch({type: 'GET_DATA', payload: {data: data.val()}})
            console.log('get firebase data ==>>', data )
        })
    }

}




const filter_data = (query) => {
    return(dispatch) => {
        dispatch({ type: 'FILTER_DATA', payload: query });
    }
}
// is lea tw msla nhi ara k meny yahn bhe data pass kea hy 
export {
    set_data,
    filter_data,
    get_data,
}