<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Scoreboard extends Model
{
    // Whitelists columns for mass insert actions
    protected $fillable = [
        'user_id',
        'points',
        'accuracy_rate',
        'time_taken',
        'rank_tier'
    ];

    // Belongs to relationship linking back to the User
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}