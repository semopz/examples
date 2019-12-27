import React, { FunctionComponent, useEffect, useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const REALLY_HIGH = 5000;
const UNIQUE_ID = (new Date()).getTime().toString();
const RUN_ME = `
  const parentElement = document.getElementById(${UNIQUE_ID}).closest(".Canvas-slideUpIn");
  parentElement.style.animationName = 'unset';
  parentElement.style.opacity = '1';
`;

export const ShowToast: FunctionComponent<{}> = () => {
  const parentElement = useRef<HTMLDivElement>();
  const [removeTransofrm, setRemoveTransofrm] = useState(false);
  useEffect(() => {
    if (removeTransofrm) {
      parentElement.current = document.getElementById(UNIQUE_ID).closest(".Canvas-slideUpIn") as HTMLDivElement;
      parentElement.current.style.animationName = 'unset';
      parentElement.current.style.opacity = '1';
    }
  });
  useEffect(() => {
    toast.info("Toast");
    return toast.dismiss;
  }, []);

  return (
    <div id={UNIQUE_ID} style={{ height: REALLY_HIGH, border: '1px dashed tomato' }}>
      <h1>
        Make sure that the page is saved and is not a SPA
      </h1>
      <h2>
        Mode!=Edit and PageLayoutType!=SingleWebPartAppPage
      </h2>
      <p>
        <strong>
          {removeTransofrm ? 'Toast is always visible' : 'You have to scroll down to see the toast'}
        </strong>
      </p>
      {!removeTransofrm && (
        <>
          Click the button below to apply the "fix" or run this in the console
          <code>
            <pre>
              {RUN_ME}
            </pre>
          </code>
          <button onClick={() => { setRemoveTransofrm(true); }}>Remove transform so that toast becomes always visible</button>
        </>
      )}
      <ToastContainer autoClose={false} position="bottom-center"/>
    </div>
  );
};
