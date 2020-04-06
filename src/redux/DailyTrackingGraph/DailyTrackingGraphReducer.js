import { FETCH_GRAPH_DATA_SUCCESS } from './DailyTrackingGraphActions'

const initialState = {
    data: [], 
    labels: []
}

const dailyTrackingGraphReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_GRAPH_DATA_SUCCESS: 
            return {
                ...state, 
                data: action.payload.total, 
                labels: action.payload.date_time
            }
        default: 
            return state
    }
}

export default dailyTrackingGraphReducer