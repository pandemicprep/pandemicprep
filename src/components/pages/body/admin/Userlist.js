/** @format */

import React, { useState, useEffect } from 'react';

import './Userlist.css';

import { getAllUsers, addUser, adminUpdateUser } from '../../../../api';
import { adminRegisterNewUser } from '../user/profileUtils';

export const Userlist = ({ user, setUser, setCart }) => {
	const [adminUserList, setAdminUserList] = useState([]);
	const [userPage, setUserPage] = useState(1);
	const [userPageLimit, setUserPageLimit] = useState(0);
	const [adminView, setAdminView] = useState('none');
	const [clickedIndex, setClickedIndex] = useState(-1);
	// Input values for add user
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [password2, setPassword2] = useState('');
	const [isAdmin, setIsAdmin] = useState(false);
	const [isUser, setIsUser] = useState(true);
	// Input values for edit one user
	const [editEmail, setEditEmail] = useState('');
	const [editPassword, setEditPassword] = useState('');
	const [editIsAdmin, setEditIsAdmin] = useState('');
	const [editIsUser, setEditIsUser] = useState('');
	const [edit, setEdit] = useState(false);

	useEffect(() => {
		getAllUsers(userPage, user.token)
			.then((response) => {
				setAdminUserList(response[1]);
				setUserPageLimit(response[0]);
			})
			.catch((error) => {
				console.error(error);
			});
	}, [userPage, edit]);

	// Input value handlers
	const handleFirstName = (event) => {
		setFirstName(event.target.value);
	};
	const handleLastName = (event) => {
		setLastName(event.target.value);
	};
	const handleEmail = (event) => {
		setEmail(event.target.value);
	};
	const handlePassword = (event) => {
		setPassword(event.target.value);
		setPassword2(event.target.value);
	};
	const handleIsAdmin = (event) => {
		setIsAdmin(event.target.checked);
	};
	const handleIsUser = (event) => {
		setIsUser(event.target.checked);
	};
	// form handler that allows admin to add a new user
	const adminAddUser = async (event) => {
		event.preventDefault();
		try {
			const newUser = await adminRegisterNewUser({
				firstName,
				lastName,
				email,
				password1: password,
				password2,
				isAdmin,
				isUser,
			});
		} catch (error) {
			throw error;
		}
	};
	// sets admin view which removes readonly from the inputs
	const enableEditMode = (item, index) => {
		setClickedIndex(index);
		if (adminView === 'none') {
			setAdminView('editOneUser');
		} else {
			setAdminView('none');
		}
	};

	const editUser = async (event, item) => {
		event.preventDefault();

		try {
			const fields = {
				email: editEmail === '' ? item.email : editEmail,
				password: editPassword,
				isAdmin: isAdmin,
				isUser: isUser,
			};
			if (editPassword === '') {
				delete fields.password;
			}
			const updatedUser = await adminUpdateUser({
				id: item.id,
				fields: fields,
				token: user.token,
			});

			setAdminView('none');
			setEdit(!edit);
		} catch (error) {
			throw error;
		}
	};

	// Pagination handlers
	const firstHandler = () => {
		setClickedIndex(-1);
		if (userPage > 1) {
			setUserPage(1);
		}
	};
	const prevHandler = () => {
		setClickedIndex(-1);
		if (userPage > 1) {
			setUserPage(userPage - 1);
		}
	};
	const nextHandler = () => {
		setClickedIndex(-1);
		if (userPage < userPageLimit) {
			setUserPage(userPage + 1);
		}
	};
	const lastHandler = () => {
		setClickedIndex(-1);
		if (userPage < userPageLimit) {
			setUserPage(userPageLimit);
		}
	};

	return (
		<div className='userList'>
			<h1 className='adminH1'>Add New User</h1>
			<form id='admin-list-user' onSubmit={adminAddUser}>
				<span className='each-input'>
					First Name:
					<input
						type='text'
						placeholder='First Name'
						value={firstName}
						onChange={handleFirstName}
					></input>
				</span>

				<span className='each-input'>
					Email:
					<input
						type='text'
						placeholder='Email'
						value={email}
						onChange={handleEmail}
					></input>
				</span>

				<span className='each-input checkbox2'>
					<p>Is Admin:</p>
					<input
						id='admin-checkbox'
						type='checkbox'
						placeholder='isAdmin'
						defaultChecked={false}
						onChange={handleIsAdmin}
					></input>
				</span>

				<span className='each-input'>
					Last Name:
					<input
						type='text'
						placeholder='Last Name'
						value={lastName}
						onChange={handleLastName}
					></input>
				</span>

				<span className='each-input'>
					Password:
					<input
						type='password'
						placeholder='Password'
						value={password}
						onChange={handlePassword}
					></input>
				</span>

				<button id='user-button2'>Add New</button>
			</form>
			<h1 id='addUserH1'>Edit Existing Users</h1>
			<div className='user-list-container'>
				{adminUserList.map((item, index) => {
					return (
						<div key={index}>
							{adminView === 'editOneUser' &&
							clickedIndex === index /**edit mode ternary */ ? (
								<form
									id='admin-list-users'
									onSubmit={(event) => {
										editUser(event, item);
									}}
								>
									<span className='each-input'>
										<h1>Email:</h1>
										<input
											type='text'
											placeholder={item.email}
											value={editEmail}
											onChange={(event) => setEditEmail(event.target.value)}
										></input>
									</span>

									<span className='each-input'>
										<h1>Password:</h1>
										<input
											id='checkbox'
											type='password'
											placeholder='Password'
											onChange={(event) =>
												setEditPassword(event.target.value)
											}
										></input>
									</span>

									{item.isAdmin ? (
										<span className='each-input checkbox'>
											<h1>Is Admin:</h1>
											<input
												id='checkbox2'
												type='checkbox'
												defaultChecked={item.isAdmin}
												onChange={(event) =>
													setIsAdmin(event.target.checked)
												}
											></input>
										</span>
									) : (
										<span className='each-input checkbox'>
											<h1>Is Admin:</h1>
											<input
												id='checkbox2'
												type='checkbox'
												defaultChecked={item.isAdmin}
												onChange={(event) =>
													setIsAdmin(event.target.checked)
												}
											></input>
										</span>
									)}

									{item.isUser ? (
										<span className='each-input checkbox' id='isUser'>
											<h1>Is User:</h1>
											<input
												id='checkbox2'
												type='checkbox'
												defaultChecked={item.isUser}
												onChange={(event) => {
													setIsUser(event.target.checked);
												}}
											></input>
										</span>
									) : (
										<span className='each-input checkbox' id='isUser'>
											<h1>Is User:</h1>
											<input
												id='checkbox2'
												type='checkbox'
												defaultChecked={item.isUser}
												onChange={(event) => {
													setIsUser(event.target.checked);
												}}
											></input>
										</span>
									)}

									<button id='user-button' type='button' onClick={enableEditMode}>
										Edit
									</button>
									{adminView === 'editOneUser' ? (
										<button id='user-button'>Authorize</button>
									) : (
										''
									)}
								</form>
							) : (
								<form id='admin-list-users'>
									<span className='each-input'>
										<h1>Email:</h1>
										<input
											type='text'
											placeholder={item.email}
											value={item.email}
											readOnly
										></input>
									</span>

									<span className='each-input'>
										<h1>Password:</h1>
										<input
											id='checkbox'
											type='password'
											placeholder='Password'
											readOnly
										></input>
									</span>

									{item.isAdmin ? (
										<span className='each-input checkbox'>
											<h1>Is Admin:</h1>
											<input id='checkbox2' type='checkbox' checked></input>
										</span>
									) : (
										<span className='each-input checkbox'>
											<h1>Is Admin:</h1>
											<input id='checkbox2' type='checkbox'></input>
										</span>
									)}

									{item.isUser ? (
										<span className='each-input checkbox' id='isUser'>
											<h1>Is User:</h1>
											<input id='checkbox2' type='checkbox' checked></input>
										</span>
									) : (
										<span className='each-input checkbox' id='isUser'>
											<h1>Is User:</h1>
											<input id='checkbox2' type='checkbox'></input>
										</span>
									)}

									<button
										id='user-button'
										type='button'
										onClick={() => {
											enableEditMode(item, index);
										}}
									>
										Edit
									</button>
									{adminView === 'editOneUser' ? (
										<button id='user-button'>Authorize</button>
									) : (
										''
									)}
								</form>
							)}
						</div>
					);
				})}
			</div>
			<div id='pagination'>
				{userPage === 1 ? (
					''
				) : (

						<>
							<button onClick={firstHandler}>
								❮❮
						</button>
							<button onClick={prevHandler}>
								❮
						</button>
						</>
					)}
				<button>{userPage}</button>
				{userPage === userPageLimit ? (
					''
				) : (
						<>
							<button onClick={nextHandler}>
								❯
						</button>
							<button onClick={lastHandler}>
								❯❯
						</button>
						</>
					)}

			</div>
		</div>
	);
};
