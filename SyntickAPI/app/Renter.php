<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Renter extends Model
{
    public $incrementing = true;
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'renters';
    /**
     * The primary key associated with the table of the model.
     *
     * @var string
     */
    protected $primaryKey = 'renterId';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;
}
