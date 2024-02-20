import asyncHandler from 'express-async-handler';


/**
 * @des `register user`
 * @route `register API api/users/register`
 * @access `public`
*/
const registerUser = asyncHandler( async (req, res) => {
    res.status(200).json({msg:'Register Api Working!'});
});


/**
 * @des `login user`
 * @route `login API api/users/register`
 * @access `public`
*/
const loginUser = asyncHandler( async (req, res) => {
    res.status(200).json({msg:'Login Api Working!'});
});

/**
 * @des `current user`
 * @route `current API api/users/current`
 * @access `public`
*/
const currentUser = asyncHandler( async (req, res) => {
    res.status(200).json({msg:'Current Api Working!'});
});

export { currentUser, loginUser, registerUser };

