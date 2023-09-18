import React, { useState } from 'react'
import "../css/addPost.css"
import "../css/preset.css"
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Logo from "../images/favicon.png";

function PostForm() {

    // getting date for google preview
    const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', "Sep", 'Oct', 'Nov', 'Dec'];
    const yrs = new Date().getFullYear();
    const index = new Date().getMonth();
    const date = new Date().getDate();

    // Storing Form data in state
    // for now we will store it in state and later we will push it to backend
    const [newPost, setNewPost] = useState({
        title: "",
        tags: "",
        category: "",
        permalink: "",
        metadescription: ""
    });
    let name, value;

    // Setting useState Hook of Meta description for google preview
    const [desc, setDesc] = useState(`Please provide a meta description by editing the snippet below. 
                If you don't, Google will try to find a relevant part of your 
                post to show in the search results.`);

    // Setting useState Hook of Post Title for google preview         
    const [title, setTitle] = useState(`Enter Your Post Title`);

    //Setting useState Hook for Permalink
    // const [perma, setPerma] = useState(``);

    // Main function for handling all Inputs
    const handleInputs = (e, inpt) => {
        // console.log(e);
        name = e.target.name;
        value = e.target.value;
        setNewPost({ ...newPost, [name]: value });

        // Post Title for google preview
        if (name === "title") {
            const getTitle = () => {
                if (value !== "") {
                    setTitle(value);
                } else {
                    setTitle(`Enter Your Post Title`);
                }
            }
            getTitle();
        }

        // Meta description for google preview
        if (name === "metadescription") {
            const getDescription = () => {
                if (value !== "") {
                    setDesc(value);
                } else {
                    setDesc(`Please provide a meta description by editing the snippet below. 
            If you don't, Google will try to find a relevant part of your 
            post to show in the search results.`)
                }
            }
            getDescription();
        }

        // if (name === "permalink") {
        //     const getTitle = () => {
        //         if (value !== "") {
        //             setPerma(value);
        //         } else {
        //             setPerma(``);
        //         }
        //     }
        //     getTitle();
        // }
    } //handleInputs function ends here

    // sending form data to backend stored in setNewPost state
    const publishPost = async (e) => {
        try {
            e.preventDefault();
            const { title, tags, category, permalink, metadescription } = newPost;

            const res = await fetch("/posts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                //converting JSON data to string
                body: JSON.stringify({
                    title, tags, category, permalink, metadescription
                })
            });

            const data = await res.json();
            if (!data) {
                window.alert("Failed to Publish post");
                console.log("Failed to Publish post");
            } else {
                window.alert("Post Published Successfully");
                console.log("Post Published Successfully");
            }
        } catch (err) {
            console.log(`Something Went Wrong`);
        }
    }

    return (
        <>
            <h3 className='heading'>Add New Post</h3>

            {/* form start */}
            <form method='POST'>
                <div className="mb-3 input-field">
                    <input type="text" name='title' className="form-control post-title" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Your Post Title' autoComplete='off'
                        onChange={handleInputs}
                        value={newPost.title} />
                </div>
                <div className="mb-3 input-field">
                    <CKEditor
                        editor={ClassicEditor}
                        data="<p>Write anything that you feel</p>"
                        onReady={editor => {
                            // You can store the "editor" and use when it is needed.
                            // console.log( 'Editor is ready to use!', editor );
                        }}
                        onChange={(event, editor) => {
                            handleInputs(event, editor);
                        }}
                        onBlur={(event, editor) => {
                            console.log('Blur.', editor);
                        }}
                        onFocus={(event, editor) => {
                            console.log('Focus.', editor);
                        }}
                    />
                </div>

                {/* Meta Data */}
                <div className='post-settings'>
                    <div className='left'>
                        <h4 className='settings-heading'>Post Settings</h4>
                        {/* tags */}
                        <div className="mb-3">
                            <label className="form-label">Tags</label>
                            <input type="text" name='tags' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" autoComplete='off'
                                onChange={handleInputs}
                                value={newPost.tags}
                            />
                            <div id="emailHelp" className="form-text">Seperate Tags by Comma</div>
                        </div>

                        {/* Category */}
                        <select className="form-select" name='category' aria-label="Default select example"
                            onChange={handleInputs}
                            value={newPost.category}
                        >
                            <option defaultValue="Select Category">Select Category</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>

                        {/* Permalink */}
                        <br />
                        <div className="mb-3">
                            <label className="form-label">Permalink</label>
                            <input type="text" name='permalink' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" autoComplete='off'
                                onChange={handleInputs}
                                value={newPost.permalink}
                            />
                            <div id="emailHelp" className="form-text">Seperate words by hyphen(-)</div>
                        </div>
                    </div>
                    <div className='right'>
                        <h4 className='settings-heading'>Google Preview</h4>

                        {/* google preview */}
                        <div className='google-preview'>
                            <div className='header'>
                                <div className='site-logo'>
                                    <img src={Logo} alt="logo" />
                                </div>
                                <span className='domain head-txt'>lusterane.com </span>
                                <span className='slug head-txt'>how-to-make-website-using-html-css....</span>
                            </div>
                            <h3 className='post-title-google'>
                                {title}
                                <span> - Lusterane</span></h3>
                            <p className='meta-description'>
                                <span>{month[index]} {date}, {yrs} - </span>
                                {desc}
                            </p>
                        </div>

                        <br />
                        <div className="mb-3">
                            <label className="form-label">Meta Description</label>
                            <input type="text" name='metadescription' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" autoComplete='off'
                                onChange={handleInputs}
                                value={newPost.metadescription}
                            />
                            <div id="emailHelp" className="form-text">Description should not be more than 160 characters</div>
                        </div>
                    </div>
                </div>

                {/* Submit Button */}
                <button type='submit' className='submit-btn' onClick={publishPost}>Publish</button>
            </form>
        </>
    )
}

export default PostForm