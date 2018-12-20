import React, { Component } from 'react';
import CompletePasswordResetForm from '../../components/authentication/CompletePasswordResetForm';
import DefaultLayout from '../layout/DefaultLayout';
class CompleteReset extends Component {

  
  render() {
    return (
      <div>
        <DefaultLayout>
          <div className="row mt-4">
            <div className="col-md-6 mx-auto">
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title text-center">Reset Password</h3>
                  <CompletePasswordResetForm />
                </div>
              </div>
            </div>
          </div>
        </DefaultLayout>
      </div>
    );
  }
}
export default CompleteReset;
