import axios from "axios";

export const FETCH_DATA_FOR_CRYPTO_TABLE_REQUEST = "FETCH_DATA_FOR_CRYPTO_TABLE_REQUEST";
export const FETCH_DATA_FOR_CRYPTO_TABLE_SUCCESS = "FETCH_DATA_FOR_CRYPTO_TABLE_SUCCESS";
export const FETCH_DATA_FOR_CRYPTO_TABLE_FAILURE = "FETCH_DATA_FOR_CRYPTO_TABLE_FAILURE";
export const FILTER_CRYPTO_REQUEST = "FILTER_CRYPTO_REQUEST";
export const FILTER_CRYPTO_SUCCESS = "FILTER_CRYPTO_SUCCESS";

export const fetchDataForCryptoTableRequest = () => {
  return {
    type: FETCH_DATA_FOR_CRYPTO_TABLE_REQUEST
  };
};

export const fetchDataForCryptoTableSuccess = cryptos => {
  return {
    type: FETCH_DATA_FOR_CRYPTO_TABLE_SUCCESS,
    payload: cryptos
  };
};

export const fetchDataForCryptoTableFailure = error => {
  return {
    type: FETCH_DATA_FOR_CRYPTO_TABLE_FAILURE,
    payload: error
  };
};

export const filterCrypto = () => {
  return {
    type: FILTER_CRYPTO_REQUEST
  }
}

export const filterCryptoSuccess = (filteredCrypto) => {
  return {
    type: FILTER_CRYPTO_SUCCESS, 
    payload: filteredCrypto
  }
}


export const fetchDataForCryptoTable = () => {
    return dispatch => {
      dispatch(fetchDataForCryptoTableRequest);
      axios
        .get("https://api.coincap.io/v2/assets?limit=210")
        .then(response => {
          const cryptos = response.data;
          dispatch(fetchDataForCryptoTableSuccess(cryptos));
        })
        .catch(error => {
          const errorMsg = error;
          dispatch(fetchDataForCryptoTableFailure(errorMsg));
        });
    };
};

export const filterCryptoHomePage = (query, cryptoData) => {
  return dispatch => {
    dispatch(filterCrypto())
    let filterData = cryptoData.filter(crypto => {
      return crypto.id.includes(query.toLowerCase())
    }) 
    dispatch(filterCryptoSuccess({data: filterData}))
  }
}

