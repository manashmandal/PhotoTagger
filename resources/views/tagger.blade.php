@extends('master')


@section('content')



<div class="row">
    <div class="row">


        <div class="col-xs-2">
            <button type="button" class="btn3d btn btn-lg btn-success"><i class="fa fa-chevron-left" aria-hidden="true"></i>                
                </button>            
        </div>

        <div class="col-xs-8">

                
         

        </div>

        <div class="col-xs-2">
                <button type="button" class="btn3d btn btn-lg btn-primary"><i class="fa fa-chevron-right" aria-hidden="true"></i>                
                </button>
        </div>
    </div>

    <div class="row">

        <div class="col-xs-6 col-xs-offset-4">

            <div class="button-group">

                <input type="checkbox" data-size="large" data-toggle="toggle" data-onstyle="danger" data-offstyle="success" data-on="Male" data-off="Female">

                <button type="button" style="margin-left: 5px;" class="btn3d btn btn-lg btn-primary"><i class="fa fa-floppy-o" aria-hidden="true"></i>                
                </button>

            </div>

        </div>

        
    </div>
</div>

@stop