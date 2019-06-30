<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Answer extends Model
{

    public function questions()
    {
        return $this->belongsTo(Question::calss);
    }

    public function user()
    {
        return $this->belongsTo(User::calss);
    }

    public function getBodyHtmlAttribute() {
        return \Parsedown::instance()->text($this->body);
    }

}
