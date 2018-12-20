import React from 'react';
import PropTypes from 'prop-types';
import DefaultLayout from 'containers/layout/DefaultLayout';

const UserProfile = props => (
  <DefaultLayout>
    <form>
      <div className="container">
        <div className="mb-3 my-5">
          <div className="profile-card">
            <div className="profile-div">
              <div>
                <div>
                  {props.isEditing ? (
                    <div>
                      <div>
                        <input
                          value="Upload photo"
                          id="image-upload"
                          onClick={props.handleUpload}
                          type="button"
                          className="btn btn-primary btn-lg "
                        />
                        <br />
                      </div>
                      <br />
                      <br />
                      <div className="form-group">
                        <label htmlFor="username" className="has-input">
                          <h3>Username</h3>
                          <input
                            id="profile-username"
                            type="text"
                            name="username"
                            className="profile-text-fields"
                            onChange={props.onChange}
                            value={props.username}
                          />
                        </label>
                      </div>
                      <div className="form-group">
                        <label htmlFor="email" className="has-input">
                          <h3>Email</h3>
                          <input
                            id="profile-email"
                            type="text"
                            name="email"
                            className=" profile-text-fields"
                            onChange={props.onChange}
                            value={props.user.email}
                          />
                        </label>
                      </div>
                      <div className="form-group">
                        <label htmlFor="bio" className="has-input">
                          <h3>Bio</h3>
                          <textarea
                            rows="4"
                            cols="50"
                            id="bio"
                            type="text"
                            name="bio"
                            className="profile-text-fields"
                            onChange={props.onChange}
                            defaultValue={props.profiles.bio}
                          />
                        </label>
                      </div>
                    </div>
                  ) : (
                    <div className=" align-items-center justify-content-between">
                      <img
                        src={
                          props.profiles.image
                            ? props.profiles.image
                            : 'http://www.macmillanenglish.com/img/author-image.png'
                        }
                        className="img-thumbnail profile-pic"
                        alt="user profile"
                      />
                      <hr />
                      <b>
                        <h3 className="username">{props.username}</h3>
                      </b>
                      <br />
                      <p className="bio">{props.profiles.bio}</p>
                      <br />
                      <br />
                    </div>
                  )}
                </div>
                <input
                  type="button"
                  onClick={props.isEditing ? props.onSubmit : props.handleEdit}
                  value={props.isEditing ? 'Save Changes' : 'Update Profile'}
                  className="btn btn-primary btn-lg "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </DefaultLayout>
);

UserProfile.propTypes = {
  username: PropTypes.string.isRequired,
  email: PropTypes.string,
  user: PropTypes.any.isRequired,
  profiles: PropTypes.any.isRequired,
  bio: PropTypes.string,
  image: PropTypes.any.isRequired,
  handleEdit: PropTypes.func.isRequired,
  isEditing: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.any.isRequired,
  handleUpload: PropTypes.func.isRequired,
};

export default UserProfile;
