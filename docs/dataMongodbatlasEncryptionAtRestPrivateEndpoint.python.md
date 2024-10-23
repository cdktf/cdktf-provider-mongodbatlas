# `dataMongodbatlasEncryptionAtRestPrivateEndpoint` Submodule <a name="`dataMongodbatlasEncryptionAtRestPrivateEndpoint` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasEncryptionAtRestPrivateEndpoint <a name="DataMongodbatlasEncryptionAtRestPrivateEndpoint" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/data-sources/encryption_at_rest_private_endpoint mongodbatlas_encryption_at_rest_private_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_encryption_at_rest_private_endpoint

dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cloud_provider: str,
  id: str,
  project_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.Initializer.parameter.cloudProvider">cloud_provider</a></code> | <code>str</code> | Label that identifies the cloud provider of the private endpoint. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | Unique 24-hexadecimal digit string that identifies the Private Endpoint Service. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | Unique 24-hexadecimal digit string that identifies your project. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cloud_provider`<sup>Required</sup> <a name="cloud_provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.Initializer.parameter.cloudProvider"></a>

- *Type:* str

Label that identifies the cloud provider of the private endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/data-sources/encryption_at_rest_private_endpoint#cloud_provider DataMongodbatlasEncryptionAtRestPrivateEndpoint#cloud_provider}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.Initializer.parameter.id"></a>

- *Type:* str

Unique 24-hexadecimal digit string that identifies the Private Endpoint Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/data-sources/encryption_at_rest_private_endpoint#id DataMongodbatlasEncryptionAtRestPrivateEndpoint#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.Initializer.parameter.projectId"></a>

- *Type:* str

Unique 24-hexadecimal digit string that identifies your project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/data-sources/encryption_at_rest_private_endpoint#project_id DataMongodbatlasEncryptionAtRestPrivateEndpoint#project_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataMongodbatlasEncryptionAtRestPrivateEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.isConstruct"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_encryption_at_rest_private_endpoint

dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_encryption_at_rest_private_endpoint

dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_encryption_at_rest_private_endpoint

dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_encryption_at_rest_private_endpoint

dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataMongodbatlasEncryptionAtRestPrivateEndpoint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataMongodbatlasEncryptionAtRestPrivateEndpoint to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataMongodbatlasEncryptionAtRestPrivateEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/data-sources/encryption_at_rest_private_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataMongodbatlasEncryptionAtRestPrivateEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.property.errorMessage">error_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.property.privateEndpointConnectionName">private_endpoint_connection_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.property.regionName">region_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.property.cloudProviderInput">cloud_provider_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.property.cloudProvider">cloud_provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `error_message`<sup>Required</sup> <a name="error_message" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.property.errorMessage"></a>

```python
error_message: str
```

- *Type:* str

---

##### `private_endpoint_connection_name`<sup>Required</sup> <a name="private_endpoint_connection_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.property.privateEndpointConnectionName"></a>

```python
private_endpoint_connection_name: str
```

- *Type:* str

---

##### `region_name`<sup>Required</sup> <a name="region_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.property.regionName"></a>

```python
region_name: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `cloud_provider_input`<sup>Optional</sup> <a name="cloud_provider_input" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.property.cloudProviderInput"></a>

```python
cloud_provider_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `cloud_provider`<sup>Required</sup> <a name="cloud_provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.property.cloudProvider"></a>

```python
cloud_provider: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasEncryptionAtRestPrivateEndpointConfig <a name="DataMongodbatlasEncryptionAtRestPrivateEndpointConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpointConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_encryption_at_rest_private_endpoint

dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpointConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cloud_provider: str,
  id: str,
  project_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpointConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpointConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpointConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpointConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpointConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpointConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpointConfig.property.cloudProvider">cloud_provider</a></code> | <code>str</code> | Label that identifies the cloud provider of the private endpoint. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpointConfig.property.id">id</a></code> | <code>str</code> | Unique 24-hexadecimal digit string that identifies the Private Endpoint Service. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpointConfig.property.projectId">project_id</a></code> | <code>str</code> | Unique 24-hexadecimal digit string that identifies your project. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpointConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpointConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpointConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpointConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpointConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpointConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpointConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cloud_provider`<sup>Required</sup> <a name="cloud_provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpointConfig.property.cloudProvider"></a>

```python
cloud_provider: str
```

- *Type:* str

Label that identifies the cloud provider of the private endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/data-sources/encryption_at_rest_private_endpoint#cloud_provider DataMongodbatlasEncryptionAtRestPrivateEndpoint#cloud_provider}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpointConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Unique 24-hexadecimal digit string that identifies the Private Endpoint Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/data-sources/encryption_at_rest_private_endpoint#id DataMongodbatlasEncryptionAtRestPrivateEndpoint#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpointConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

Unique 24-hexadecimal digit string that identifies your project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/data-sources/encryption_at_rest_private_endpoint#project_id DataMongodbatlasEncryptionAtRestPrivateEndpoint#project_id}

---



