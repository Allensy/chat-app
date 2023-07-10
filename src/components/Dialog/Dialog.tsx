import React, { FormEvent } from "react";
import "./Dialog.scss";
import Input from "../Input/input";
import { UserData } from "../../types/Message.interface";
interface DialogProps {
  onSave: (data: any) => void;
}

const Dialog = ({ onSave }: DialogProps) => {
  const [company_size, setCompanySize] = React.useState<string>("");
  const [industry, setIndustry] = React.useState<string>("");
  const [country, setCountry] = React.useState<string>("");
  const saveData = (e: FormEvent<HTMLFormElement>) => {
    const data: UserData = {
      company_size,
      industry,
      country,
    };
    console.log(data);
    onSave(data);
  };

  const companySizeHandler = (value: string) => {
    setCompanySize(value);
  };
  const industryHandler = (value: string) => {
    setIndustry(value);
  };
  const countryHandler = (value: string) => {
    setCountry(value);
  };
  return (
    <div className="dialog-backdrop">
      <dialog open={true} className="chat-dialog">
        <form className="userForm" action="" onSubmit={saveData}>
          <div className="input-item">
            <Input value={company_size} onChange={companySizeHandler}></Input>
          </div>
          <div className="input-item">
            <Input value={industry} onChange={industryHandler}></Input>
          </div>
          <div className="input-item">
            <Input value={country} onChange={countryHandler}></Input>
          </div>
          {/* <input className="input-item" type="text" />
          <input className="input-item" type="text" />
          <input className="input-item" type="text" /> */}
          <button>Save</button>
        </form>
      </dialog>
    </div>
  );
};

export default Dialog;
