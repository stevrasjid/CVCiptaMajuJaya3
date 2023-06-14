<?php

namespace App\Traits;

use Webpatser\Uuid\Uuid;

trait uuidFunction
{

    /**
     * Boot function from laravel.
     */
    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            $model->{$model->getKeyName()} = Uuid::generate()->string;
        });
    }

    public function getIncrementing ()
    {
        return false;
    }

    // Helps the application specify the field type in the database
    public function getKeyType ()
    {
        return 'string';
    }
    public static function NewGuid()
    {
        $id = Uuid::generate()->string;
        return $id;
    }
}