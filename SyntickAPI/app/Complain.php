<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Complain extends Model
{
    public $incrementing = true;
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'complains';
    /**
     * The primary key associated with the table of the model.
     *
     * @var string
     */
    protected $primaryKey = 'complainId';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;
}
