<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/
Route::get("/", function() {
   echo "Welcome to the Syntick api";
});
Route::get('api/renters/{renterID}', 'APIController@getRenter')->name('getRenter');
Route::post('api/renters', 'APIController@postRenters')->name('postRenters');
Route::get('api/renters/{renterID}/complains', 'APIController@getRenterComplains')->name('getRenterComplains');
Route::post('api/renters/{renterID}/complains', 'APIController@postRenterComplains')->name('getRenterComplains');
Route::get('api/owners', 'APIController@getOwners')->name('getOwners');
Route::get('api/owner{ownerID}', 'APIController@getOwner')->name('getOwner');
Route::post('api/owners', 'APIController@postOwners')->name('postOwners');
Route::get('api/renters', 'APIController@getOwnerComplains')->name('getOwnerComplains');
Route::put('api/renters', 'APIController@putOwnerComplains')->name('putOwnerComplains');