import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateCoffee = () => {

    const coffee = useLoaderData();
    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

    const handleUpdateCoffee = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value

        const updatedCoffee = { name, quantity, supplier, taste, category, details, photo }
        console.log(updatedCoffee);

        // Send to data server site 
        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee Update Successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }
            })
    }

    return (
        <div className="bg-[#F4F3F0] p-24">
            <h2 className="text-3xl font-extrabold">Update coffee : {name}</h2>
            <form onSubmit={handleUpdateCoffee}>
                {/* Form Name or Quantity Row */}
                <div className="md:flex mb-8">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" defaultValue={name} placeholder="Coffee Name" className="input input-bordered md:w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="quantity" defaultValue={quantity} placeholder="Available quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* Form Supplier or taste Row */}
                <div className="md:flex mb-8">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Supplier Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="supplier" defaultValue={supplier} placeholder="Supplier Name" className="input input-bordered md:w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">taste</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="taste" defaultValue={taste} placeholder="taste" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* Form category or details Row */}
                <div className="md:flex mb-8">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="category" defaultValue={category} placeholder="category Name" className="input input-bordered md:w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="details" defaultValue={details} placeholder="details" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* Form category or details Row */}
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo url</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" defaultValue={photo} placeholder="Photo url" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Update Coffee" className="btn btn-block" />
            </form>
        </div>
    );
};

export default UpdateCoffee;