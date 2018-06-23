import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ar_white, ar_blue, nav_width, ar_darkBlue, ar_darkGrey, primary_font } from '../../../variables.jsx'
import AgileCRM from 'agile_crm'

// const AgileCRMManager = require('../../Accessories/AgileCRM/agilecrm.js')

export default class ContactRawCode extends Component {
    render() {
        return (
          <form className="form-view theme5" id="agile-form" action="https://australianroundhouse.agilecrm.com/formsubmit" method="GET">
              <fieldset>

                  <legend>Contact Form</legend>
                  <p className="agile-form-description" />
                  <div>
                      <input type="hidden" id="_agile_form_name" name="_agile_form_name" value="Contact Form" />
                      <input type="hidden" id="_agile_domain" name="_agile_domain" value="australianroundhouse" />
                      <input type="hidden" id="_agile_api" name="_agile_api" value="lfo0pe9aja0kv9rkbgum9lprud" />
                      <input type="hidden" id="_agile_redirect_url" name="_agile_redirect_url" value="#" />
                      <input type="hidden" id="_agile_document_url" name="_agile_document_url" value="" />
                      <input type="hidden" id="_agile_confirmation_msg" name="_agile_confirmation_msg" value="Great! Thanks for filling out the form." />
                      <input type="hidden" id="_agile_form_id_tags" name="tags" value="website enquiry" />

                      <input type="hidden" id="_agile_form_id" name="_agile_form_id" value="5747286126624768" />
                    </div>

                  <div classNameName="agile-group">
                      <label className="agile-label" htmlFor="agilefield-name">Name</label>
                      <div className="agile-field-xlarge agile-field">
                          <input maxLength="250" id="agilefield-name" name="first_name" type="text" placeholder="" className="agile-height-default" />
                        </div>
                      <div className="agile-custom-clear" />
                    </div>

                  <div className="agile-group required-control">
                      <label className="agile-label" htmlFor="agilefield-email">Email<span className="agile-span-asterisk"> *</span></label>
                      <div className="agile-field-xlarge agile-field">
                          <input maxLength="250" id="agilefield-email" name="email" type="email" placeholder="" className="agile-height-default" required="" />
                        </div>
                      <div className="agile-custom-clear" />
                    </div>

                  <div className="agile-group required-control">
                      <label className="agile-label" htmlFor="agilefield-8">Phone Number<span className="agile-span-asterisk"> *</span></label>
                      <div className="agile-field-xlarge agile-field">
                          <input maxLength="250" id="agilefield-8" name="phone" type="text" placeholder="" className="agile-height-default" required="" />
                        </div>
                      <div className="agile-custom-clear" />
                    </div>

                  <div className="agile-group">
                      <label className="agile-label" htmlFor="agilefield-building-address-status">Building Address Status<span className="agile-span-asterisk"> *</span></label>
                      <div className="agile-field-xlarge agile-field">
                          <select id="agilefield-building-address-status" name="agilefield-building-address-status" className="agile-height-default" required="">
                              <option value="">Select</option>
                              <option value="Not Found">Not Found</option>
                              <option value="In Process">In Process</option>
                              <option value="Owner">Owner</option>
                            </select>
                        </div>
                    </div>

                  <div className="agile-group">
                      <label className="agile-label" htmlFor="agilefield-proposed-building-address">Proposed Building Address</label>
                      <div className="agile-field-xlarge agile-field">
                          <input maxLength="250" id="agilefield-proposed-building-address" name="address" type="text" placeholder="if applicable" className="agile-height-default" />
                        </div>
                      <div className="agile-custom-clear" />
                    </div>

                  <div className="agile-group">
                      <label className="agile-label" htmlFor="agilefield-10">Please let us know any comments or questions that you might have.</label>
                      <div className="agile-field-xlarge agile-field">
                          <textarea maxLength="250" id="agilefield-10" name="note" placeholder="" className="agile-height-default" />
                        </div>
                      <div className="agile-custom-clear" />
                    </div>

                  <div className="agile-group agile-form-multiradios">
                      <label className="agile-label" htmlFor="radios-terms-and-conditions_1529755997634">Terms &amp; Conditions<span className="agile-span-asterisk"> *</span></label>
                      <div className="agile-field agile-field-xlarge agile-height-default">
                          <div>
                              <label htmlFor="radios-terms-and-conditions_1529755997634-0" className="i-checks">
                                  <input type="radio" name="radios-terms-and-conditions_1529755997634-0" id="radios-terms-and-conditions_1529755997634-0" value="I Agree" required="" /><i />
                                I Agree
                                </label>
                            </div>
                        </div>

                      <div className="agile-group">
                          <label className="agile-label">&nbsp;</label>
                          <div className="agile-field agile-button-field">
                              <button type="submit" className="agile-button">Send</button>
                              <br /><span id="agile-error-msg" />
                            </div>
                        </div>
                    </div>

                </fieldset>
            </form>
        )
    }
};