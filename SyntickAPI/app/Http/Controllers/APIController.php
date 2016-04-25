<?php
namespace App\Http\Controllers;

use App\Renter;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesResources;

class APIController extends BaseController
{
    public function getRenter($renterID) {
        $renter = Renter::find($renterID);
        return response()->json($renter);
    }
    public function postRenters() {
        
    }
    public function getRenterComplains($renterID) {

    }
    public function postRenterComplains($renterID) {

    }
    public function getOwners($ownerID) {
        $owner = Renter::find($ownerID);
        return response()->json($owner);
    }
    public function getOwner($ownerID) {

    }
    public function postOwners() {

    }
    public function getOwnerComplains() {

    }
    public function putOwnerComplains() {

    }
}
