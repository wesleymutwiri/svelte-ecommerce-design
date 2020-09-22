<script>
    import SelectCountry from './SelectCountry.svelte';

</script>
<div class="shipping-details">
    <div class="shipping-form">

   
    <h3>Shipping</h3>
    <form action="#">
        <div class="form-container">
            <input type="text" name="Name" id="" required>
            <label for="Name">Your Name</label>
        </div>
        <div class="form-container">
            <input type="text" name="address" id="" required>
            <label for="address">Your Address</label>
        </div>
        <div class="row">

        
        <div class="form-container">
            <input type="text" name="city" id="" required>
            <label for="city">Your City</label>
        </div>
            <div class="form-container">
                <input type="text" name="zip-code" id="" required>
                <label for="Zip Code">Zip Code:</label>
            </div>
            </div>
        <div class="form-container-select">
            <label for="country">Country</label>
            <SelectCountry />
        </div>
        <div class="form-container-select">
            <label for="shipping-method">Shipping Method</label>
            <select name="shipping-method" id="" required>
                <option value="standard-shipping">Standard Shipping(+3.50$)</option>
                <option value="same-day-shipping">Same Day Shipping(+10.50$)</option>
                <option value="free-shipping">Free Shipping(0.00$)</option>
            </select>
        </div>
        <div class="form-container-select">
            <div class="row">
                <input type="checkbox" name="save" id="" >
                <label for="save">
                    Save to first checkout, Next time
                </label>
            </div>
            </div>
        </form>
    </div>
    <div class="button">
        <button class="buy-now">Buy now</button>
        
    </div>
</div>

<style>
    .shipping-details {
        background: #f6f6f6;
        padding: 20px;
        width: 350px;
        display: flex;
        justify-content: space-around;
        flex-direction: column;
    }
    h3 {
        margin: 0 0 30px;
        padding: 0;

    }
    input[type="text"] {
        width: 100%;
        padding: 10px 0;
        font-size: 16px;
        border: none;
        border-bottom: 1px solid black;
        outline: none;
        background: transparent;
        margin-bottom: 30px;
    }

    .form-container {
        position: relative;

    }

    label {
        position: absolute;
        top: 0;
        left: 0;
        padding: 10px 0;
        font-size: 16px;
        pointer-events: none;
        transition: .5s;
    }
    .form-container-select label {
        position: unset;
    }
   input:focus ~ label, input:valid ~ label{
        top: -20px;
        left: 0;
        font-size: 12px;
    }
    .row {
        display: flex;
        gap: 10px;
        align-content: center;
    }

    .buy-now {
        background: #226200;
        color: #fff;
        text-transform: uppercase;
        width: 100%;
        margin-top: 30px;
    }
    input[type="checkbox"] {
        margin: 0;
    }
    form {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    select {
        border: none;
        background: transparent;
        border-bottom: 1px solid black;
        appearance: none;
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAMCAYAAABSgIzaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDZFNDEwNjlGNzFEMTFFMkJEQ0VDRTM1N0RCMzMyMkIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDZFNDEwNkFGNzFEMTFFMkJEQ0VDRTM1N0RCMzMyMkIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0NkU0MTA2N0Y3MUQxMUUyQkRDRUNFMzU3REIzMzIyQiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0NkU0MTA2OEY3MUQxMUUyQkRDRUNFMzU3REIzMzIyQiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuGsgwQAAAA5SURBVHjaYvz//z8DOYCJgUxAf42MQIzTk0D/M+KzkRGPoQSdykiKJrBGpOhgJFYTWNEIiEeAAAMAzNENEOH+do8AAAAASUVORK5CYII=);
        background-repeat: no-repeat;
        background-position: right 50%;
    }

</style>