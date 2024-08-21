import React from "react";
import "./checkoutinputs.css";
import { MdKeyboardArrowDown } from "react-icons/md";

const Checkoutinputs = () => {
  return (
    <div className="checkoutinputs-container">
      <div className="checkoutinputs-left">
        <h1>Billing details</h1>
        <form>
          <div className="checkoutinputs-names-div">
            <div className="checkoutinputs-names-div-left">
              <label>First Name</label>
              <input type="text" />
            </div>
            <div className="checkoutinputs-names-div-right">
              <label>Last Name</label>
              <input type="text" />
            </div>
          </div>
          <label>Company Name (Optional)</label>
          <input type="text" />
          <div class="dropdown-container">
            <label class="dropdown-label" for="country">
              Country / Region
            </label>
            <div class="custom-select">
              <select id="country" name="country">
                <option value="Sri Lanka">Sri Lanka</option>
                <option value="Afghanistan">Afghanistan</option>
                <option value="Albania">Albania</option>
                <option value="Algeria">Algeria</option>
                <option value="Andorra">Andorra</option>
                <option value="Angola">Angola</option>
                <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                <option value="Argentina">Argentina</option>
                <option value="Armenia">Armenia</option>
                <option value="Australia">Australia</option>
                <option value="Austria">Austria</option>
                <option value="Azerbaijan">Azerbaijan</option>
                <option value="Bahamas">Bahamas</option>
                <option value="Bahrain">Bahrain</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="Barbados">Barbados</option>
                <option value="Belarus">Belarus</option>
                <option value="Belgium">Belgium</option>
                <option value="Belize">Belize</option>
                <option value="Benin">Benin</option>
                <option value="Bhutan">Bhutan</option>
                <option value="Bolivia">Bolivia</option>
                <option value="Bosnia and Herzegovina">
                  Bosnia and Herzegovina
                </option>
                <option value="Botswana">Botswana</option>
                <option value="Brazil">Brazil</option>
                <option value="Brunei">Brunei</option>
                <option value="Bulgaria">Bulgaria</option>
                <option value="Burkina Faso">Burkina Faso</option>
                <option value="Burundi">Burundi</option>
                <option value="Cabo Verde">Cabo Verde</option>
                <option value="Cambodia">Cambodia</option>
                <option value="Cameroon">Cameroon</option>
                <option value="Canada">Canada</option>
                <option value="Central African Republic">
                  Central African Republic
                </option>
                <option value="Chad">Chad</option>
                <option value="Chile">Chile</option>
                <option value="China">China</option>
                <option value="Colombia">Colombia</option>
                <option value="Comoros">Comoros</option>
                <option value="Congo, Democratic Republic of the">
                  Congo, Democratic Republic of the
                </option>
                <option value="Congo, Republic of the">
                  Congo, Republic of the
                </option>
                <option value="Costa Rica">Costa Rica</option>
                <option value="Cote d'Ivoire">Cote d'Ivoire</option>
                <option value="Croatia">Croatia</option>
                <option value="Cuba">Cuba</option>
                <option value="Cyprus">Cyprus</option>
                <option value="Czech Republic">Czech Republic</option>
                <option value="Denmark">Denmark</option>
                <option value="Djibouti">Djibouti</option>
                <option value="Dominica">Dominica</option>
                <option value="Dominican Republic">Dominican Republic</option>
                <option value="East Timor (Timor-Leste)">
                  East Timor (Timor-Leste)
                </option>
                <option value="Ecuador">Ecuador</option>
                <option value="Egypt">Egypt</option>
                <option value="El Salvador">El Salvador</option>
                <option value="Equatorial Guinea">Equatorial Guinea</option>
                <option value="Eritrea">Eritrea</option>
                <option value="Estonia">Estonia</option>
                <option value="Eswatini">Eswatini</option>
                <option value="Ethiopia">Ethiopia</option>
                <option value="Fiji">Fiji</option>
                <option value="Finland">Finland</option>
                <option value="France">France</option>
                <option value="Gabon">Gabon</option>
                <option value="Gambia">Gambia</option>
                <option value="Georgia">Georgia</option>
                <option value="Germany">Germany</option>
                <option value="Ghana">Ghana</option>
                <option value="Greece">Greece</option>
                <option value="Grenada">Grenada</option>
                <option value="Guatemala">Guatemala</option>
                <option value="Guinea">Guinea</option>
                <option value="Guinea-Bissau">Guinea-Bissau</option>
                <option value="Guyana">Guyana</option>
                <option value="Haiti">Haiti</option>
                <option value="Honduras">Honduras</option>
                <option value="Hungary">Hungary</option>
                <option value="Iceland">Iceland</option>
                <option value="India">India</option>
                <option value="Indonesia">Indonesia</option>
                <option value="Iran">Iran</option>
                <option value="Iraq">Iraq</option>
                <option value="Ireland">Ireland</option>
                <option value="Israel">Israel</option>
                <option value="Italy">Italy</option>
                <option value="Jamaica">Jamaica</option>
                <option value="Japan">Japan</option>
                <option value="Jordan">Jordan</option>
                <option value="Kazakhstan">Kazakhstan</option>
                <option value="Kenya">Kenya</option>
                <option value="Kiribati">Kiribati</option>
                <option value="Korea, North">Korea, North</option>
                <option value="Korea, South">Korea, South</option>
                <option value="Kosovo">Kosovo</option>
                <option value="Kuwait">Kuwait</option>
                <option value="Kyrgyzstan">Kyrgyzstan</option>
                <option value="Laos">Laos</option>
                <option value="Latvia">Latvia</option>
                <option value="Lebanon">Lebanon</option>
                <option value="Lesotho">Lesotho</option>
                <option value="Liberia">Liberia</option>
                <option value="Libya">Libya</option>
                <option value="Liechtenstein">Liechtenstein</option>
                <option value="Lithuania">Lithuania</option>
                <option value="Luxembourg">Luxembourg</option>
                <option value="Madagascar">Madagascar</option>
                <option value="Malawi">Malawi</option>
                <option value="Malaysia">Malaysia</option>
                <option value="Maldives">Maldives</option>
                <option value="Mali">Mali</option>
                <option value="Malta">Malta</option>
                <option value="Marshall Islands">Marshall Islands</option>
                <option value="Mauritania">Mauritania</option>
                <option value="Mauritius">Mauritius</option>
                <option value="Mexico">Mexico</option>
                <option value="Micronesia">Micronesia</option>
                <option value="Moldova">Moldova</option>
                <option value="Monaco">Monaco</option>
                <option value="Mongolia">Mongolia</option>
                <option value="Montenegro">Montenegro</option>
                <option value="Morocco">Morocco</option>
                <option value="Mozambique">Mozambique</option>
                <option value="Myanmar">Myanmar</option>
                <option value="Namibia">Namibia</option>
                <option value="Nauru">Nauru</option>
                <option value="Nepal">Nepal</option>
                <option value="Netherlands">Netherlands</option>
                <option value="New Zealand">New Zealand</option>
                <option value="Nicaragua">Nicaragua</option>
                <option value="Niger">Niger</option>
                <option value="Nigeria">Nigeria</option>
                <option value="North Macedonia">North Macedonia</option>
                <option value="Norway">Norway</option>
                <option value="Oman">Oman</option>
                <option value="Pakistan">Pakistan</option>
                <option value="Palau">Palau</option>
                <option value="Panama">Panama</option>
                <option value="Papua New Guinea">Papua New Guinea</option>
                <option value="Paraguay">Paraguay</option>
                <option value="Peru">Peru</option>
                <option value="Philippines">Philippines</option>
                <option value="Poland">Poland</option>
                <option value="Portugal">Portugal</option>
                <option value="Qatar">Qatar</option>
                <option value="Romania">Romania</option>
                <option value="Russia">Russia</option>
                <option value="Rwanda">Rwanda</option>
                <option value="Saint Kitts and Nevis">
                  Saint Kitts and Nevis
                </option>
                <option value="Saint Lucia">Saint Lucia</option>
                <option value="Saint Vincent and the Grenadines">
                  Saint Vincent and the Grenadines
                </option>
                <option value="Samoa">Samoa</option>
                <option value="San Marino">San Marino</option>
                <option value="Sao Tome and Principe">
                  Sao Tome and Principe
                </option>
                <option value="Saudi Arabia">Saudi Arabia</option>
                <option value="Senegal">Senegal</option>
                <option value="Serbia">Serbia</option>
                <option value="Seychelles">Seychelles</option>
              </select>
              <span class="select-arrow">
                <MdKeyboardArrowDown />
              </span>
            </div>
          </div>
          <label>Street address</label>
          <input type="text" />
          <label>Town / City</label>
          <input type="text" />
          <div class="dropdown-container">
            <label class="dropdown-label" for="country">
              Province
            </label>
            <div class="custom-select">
              <select id="country" name="country">
                <option value="Western Province">Western Province</option>
                <option value="Eastern Province">Eastern Province</option>
                <option value="Northern Province">Northern Province</option>
                <option value="Southern Province">Southern Province</option>
                <option value="Central Province">Central Province</option>
                <option value="Coastal Province">Coastal Province</option>
                <option value="Highland Province">Highland Province</option>
                <option value="Midlands Province">Midlands Province</option>
                <option value="Savannah Province">Savannah Province</option>
                <option value="Delta Province">Delta Province</option>
                <option value="Riverine Province">Riverine Province</option>
                <option value="Rainforest Province">Rainforest Province</option>
                <option value="Desert Province">Desert Province</option>
                <option value="Mountain Province">Mountain Province</option>
                <option value="Plateau Province">Plateau Province</option>
                <option value="Basin Province">Basin Province</option>
                <option value="Canyon Province">Canyon Province</option>
                <option value="Valley Province">Valley Province</option>
                <option value="Island Province">Island Province</option>
                <option value="Lagoon Province">Lagoon Province</option>
                <option value="Gulf Province">Gulf Province</option>
                <option value="Peninsula Province">Peninsula Province</option>
                <option value="Archipelago Province">
                  Archipelago Province
                </option>
                <option value="Inland Province">Inland Province</option>
                <option value="Wetlands Province">Wetlands Province</option>
                <option value="Steppe Province">Steppe Province</option>
                <option value="Prairie Province">Prairie Province</option>
                <option value="Forest Province">Forest Province</option>
                <option value="Woodland Province">Woodland Province</option>
                <option value="Glacier Province">Glacier Province</option>
                <option value="Arctic Province">Arctic Province</option>
                <option value="Subarctic Province">Subarctic Province</option>
                <option value="Tundra Province">Tundra Province</option>
                <option value="Permafrost Province">Permafrost Province</option>
                <option value="Savanna Province">Savanna Province</option>
                <option value="Chaparral Province">Chaparral Province</option>
                <option value="Taiga Province">Taiga Province</option>
                <option value="Mangrove Province">Mangrove Province</option>
                <option value="Fjord Province">Fjord Province</option>
                <option value="Terrace Province">Terrace Province</option>
                <option value="Cliffside Province">Cliffside Province</option>
                <option value="Mesa Province">Mesa Province</option>
                <option value="Butte Province">Butte Province</option>
                <option value="Oasis Province">Oasis Province</option>
                <option value="Savannah Province">Savannah Province</option>
                <option value="Tropical Province">Tropical Province</option>
                <option value="Equatorial Province">Equatorial Province</option>
                <option value="Temperate Province">Temperate Province</option>
                <option value="Mediterranean Province">
                  Mediterranean Province
                </option>
                <option value="Boreal Province">Boreal Province</option>
                <option value="Grassland Province">Grassland Province</option>
                <option value="Shrubland Province">Shrubland Province</option>
                <option value="Sand Dune Province">Sand Dune Province</option>
                <option value="Pampas Province">Pampas Province</option>
                <option value="Bushveld Province">Bushveld Province</option>
                <option value="Hinterland Province">Hinterland Province</option>
                <option value="Pastoral Province">Pastoral Province</option>
                <option value="Alpine Province">Alpine Province</option>
                <option value="Coastline Province">Coastline Province</option>
                <option value="Fertile Crescent Province">
                  Fertile Crescent Province
                </option>
                <option value="Cavern Province">Cavern Province</option>
                <option value="Deltaic Province">Deltaic Province</option>
                <option value="Uplands Province">Uplands Province</option>
                <option value="Lowlands Province">Lowlands Province</option>
                <option value="Badlands Province">Badlands Province</option>
                <option value="Ridge Province">Ridge Province</option>
                <option value="Gorge Province">Gorge Province</option>
                <option value="Outback Province">Outback Province</option>
                <option value="Geyser Province">Geyser Province</option>
              </select>
              <span class="select-arrow">
                <MdKeyboardArrowDown />
              </span>
            </div>
          </div>
          <label>ZIP code</label>
          <input type="text" />
          <label>Phone</label>
          <input type="text" />
          <label>Email address</label>
          <input type="text" />
          <input
            type="text"
            className="inp"
            placeholder="Additional information"
          />
        </form>
      </div>
      <div className="checkoutinputs-right">
        <div className="checkoutinputs-right-top-info">
          <div className="checkoutinputs-right-top-info-left">
            <h2>Products</h2>
            <p>
              MIRAGE MR-AT172 285/65 <span>x 1</span>
            </p>
            <h3>Subtotal</h3>
            <h3>Total</h3>
          </div>
          <div className="checkoutinputs-right-top-info-right">
            <h2>Subtotal</h2>
            <p>Rs. 50,000.00</p>
            <h3>Rs. 50,000.00</h3>
            <h1>Rs. 50,000.00</h1>
          </div>
        </div>
        <hr />
        <div className="checkoutinputs-right-bottom-info">
          <div className="checkoutinputs-right-bottom-info-top">
            <div className="special">
              <div></div> <span>Direct Bank Transfer</span>
            </div>
            <p>
              Make your payment directly into our bank account. Please use
              <br /> your Order ID as the payment reference. Your order will not
              be <br /> shipped until the funds have cleared in our account.
            </p>
          </div>
          <div className="checkoutinputs-right-bottom-info-medium">
            <div className="special2">
              <div></div> <span>Direct Bank Transfer</span>
            </div>
            <div className="special3">
              <div></div> <span>Cash On Delivery</span>
            </div>
          </div>
          <div className="checkoutinputs-right-bottom-info-bottom">
            <p>Your personal data will be used to support your experience <br/> throughout this website, to manage access to your account, and <br/> for other purposes described in our <b>privacy policy.</b></p>
          </div>
          <button>Place order</button>
        </div>
      </div>
    </div>
  );
};

export default Checkoutinputs;
