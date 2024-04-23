import React from 'react';
import {useForm} from 'react-hook-form';


export default function TweetEditorInput({ register, ref,error }) {



  return ( 
  <>
    <input
      ref={ref}
      type="text"
      name="Post"
      className="tweet-editor-input"
      placeholder="What’s happening?"
      maxLength={180}
      {...register("text", { required:true , maxLength: 180 })}
      />

    {/* {error.text && <p  error={ error} >Seulement 180 caractères sont autorisés</p>} */}
    {error.text && <p error={error} style={{ color: 'red' }}>Le tweet n'est pas créé</p>}
    </> )
}

