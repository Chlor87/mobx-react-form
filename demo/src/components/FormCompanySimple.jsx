import React from 'react';
import { observer } from 'mobx-react';
import { DebugForm } from './Debug';

const products = ['iPhone', 'Watch', 'iMac', 'Mac Pro', 'MacBook Air', 'MacBook Pro'];

const FormCompany = ({ form }) => (
  <div className="container">
    <div className="splitted-35 fixed container-left normal">
      <form>
        <h2>Form Company</h2>

        <div>
          <b>{form.$('name').label}</b>
          <i>{form.$('name').error}</i>
        </div>
        <input
          type="text"
          name={form.$('name').name}
          value={form.$('name').value}
          placeholder={form.$('name').label}
          onChange={form.$('name').sync}
        />

        <div>
          <b>{form.$('revenue').label}</b>
          <i>{form.$('revenue').error}</i>
        </div>
        <input
          type="text"
          name={form.$('revenue').name}
          value={form.$('revenue').value}
          placeholder={form.$('revenue').label}
          onChange={form.$('revenue').sync}
        />

        <div>
          <b>{form.$('assets').label}</b>
          <i>{form.$('assets').error}</i>
        </div>
        <input
          type="text"
          name={form.$('assets').name}
          value={form.$('assets').value}
          placeholder={form.$('assets').label}
          onChange={form.$('assets').sync}
        />

        <div>
          <b>{form.$('products').label}</b>
          <i>{form.$('products').error}</i>
        </div>
        <select
          value={form.$('products').value}
          name={form.$('products').name}
          onChange={form.$('products').sync}
        >
          {products.map((val) =>
            <option value={val} key={val}>{val}</option>
          )}
        </select>

        <br />
        <br />
        <div className="ctrl">
          <button
            type="submit"
            onClick={form.handleOnSubmit}
          >Submit</button>
          <button
            type="submit"
            onClick={form.handleOnClear}
          >Clear</button>
          <button
            type="submit"
            onClick={form.handleOnReset}
          >Reset</button>
        </div>

        <p><i>{form.error}</i></p>

      </form>
    </div>
    <div className="splitted-65 container-right">
      <DebugForm form={form} />
    </div>
  </div>
);

FormCompany.propTypes = {
  form: React.PropTypes.object,
};

export default observer(FormCompany);
