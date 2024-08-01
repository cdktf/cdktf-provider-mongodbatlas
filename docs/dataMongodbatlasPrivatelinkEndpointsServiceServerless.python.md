# `dataMongodbatlasPrivatelinkEndpointsServiceServerless` Submodule <a name="`dataMongodbatlasPrivatelinkEndpointsServiceServerless` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasPrivatelinkEndpointsServiceServerless <a name="DataMongodbatlasPrivatelinkEndpointsServiceServerless" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/data-sources/privatelink_endpoints_service_serverless mongodbatlas_privatelink_endpoints_service_serverless}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_privatelink_endpoints_service_serverless

dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  instance_name: str,
  project_id: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.Initializer.parameter.instanceName">instance_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/data-sources/privatelink_endpoints_service_serverless#instance_name DataMongodbatlasPrivatelinkEndpointsServiceServerless#instance_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/data-sources/privatelink_endpoints_service_serverless#project_id DataMongodbatlasPrivatelinkEndpointsServiceServerless#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/data-sources/privatelink_endpoints_service_serverless#id DataMongodbatlasPrivatelinkEndpointsServiceServerless#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `instance_name`<sup>Required</sup> <a name="instance_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.Initializer.parameter.instanceName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/data-sources/privatelink_endpoints_service_serverless#instance_name DataMongodbatlasPrivatelinkEndpointsServiceServerless#instance_name}.

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.Initializer.parameter.projectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/data-sources/privatelink_endpoints_service_serverless#project_id DataMongodbatlasPrivatelinkEndpointsServiceServerless#project_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/data-sources/privatelink_endpoints_service_serverless#id DataMongodbatlasPrivatelinkEndpointsServiceServerless#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataMongodbatlasPrivatelinkEndpointsServiceServerless resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.isConstruct"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_privatelink_endpoints_service_serverless

dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_privatelink_endpoints_service_serverless

dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_privatelink_endpoints_service_serverless

dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_privatelink_endpoints_service_serverless

dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataMongodbatlasPrivatelinkEndpointsServiceServerless resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataMongodbatlasPrivatelinkEndpointsServiceServerless to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataMongodbatlasPrivatelinkEndpointsServiceServerless that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/data-sources/privatelink_endpoints_service_serverless#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataMongodbatlasPrivatelinkEndpointsServiceServerless to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.property.results">results</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsList">DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.property.instanceNameInput">instance_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.property.instanceName">instance_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `results`<sup>Required</sup> <a name="results" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.property.results"></a>

```python
results: DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsList">DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_name_input`<sup>Optional</sup> <a name="instance_name_input" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.property.instanceNameInput"></a>

```python
instance_name_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance_name`<sup>Required</sup> <a name="instance_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.property.instanceName"></a>

```python
instance_name: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerless.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasPrivatelinkEndpointsServiceServerlessConfig <a name="DataMongodbatlasPrivatelinkEndpointsServiceServerlessConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_privatelink_endpoints_service_serverless

dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  instance_name: str,
  project_id: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessConfig.property.instanceName">instance_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/data-sources/privatelink_endpoints_service_serverless#instance_name DataMongodbatlasPrivatelinkEndpointsServiceServerless#instance_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessConfig.property.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/data-sources/privatelink_endpoints_service_serverless#project_id DataMongodbatlasPrivatelinkEndpointsServiceServerless#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/data-sources/privatelink_endpoints_service_serverless#id DataMongodbatlasPrivatelinkEndpointsServiceServerless#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `instance_name`<sup>Required</sup> <a name="instance_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessConfig.property.instanceName"></a>

```python
instance_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/data-sources/privatelink_endpoints_service_serverless#instance_name DataMongodbatlasPrivatelinkEndpointsServiceServerless#instance_name}.

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/data-sources/privatelink_endpoints_service_serverless#project_id DataMongodbatlasPrivatelinkEndpointsServiceServerless#project_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/data-sources/privatelink_endpoints_service_serverless#id DataMongodbatlasPrivatelinkEndpointsServiceServerless#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataMongodbatlasPrivatelinkEndpointsServiceServerlessResults <a name="DataMongodbatlasPrivatelinkEndpointsServiceServerlessResults" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResults"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResults.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_privatelink_endpoints_service_serverless

dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResults()
```


## Classes <a name="Classes" id="Classes"></a>

### DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsList <a name="DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsList.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_privatelink_endpoints_service_serverless

dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference <a name="DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_privatelink_endpoints_service_serverless

dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.property.cloudProviderEndpointId">cloud_provider_endpoint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.property.endpointId">endpoint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.property.endpointServiceName">endpoint_service_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.property.errorMessage">error_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.property.privateEndpointIpAddress">private_endpoint_ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.property.privateLinkServiceResourceId">private_link_service_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResults">DataMongodbatlasPrivatelinkEndpointsServiceServerlessResults</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloud_provider_endpoint_id`<sup>Required</sup> <a name="cloud_provider_endpoint_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.property.cloudProviderEndpointId"></a>

```python
cloud_provider_endpoint_id: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `endpoint_id`<sup>Required</sup> <a name="endpoint_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.property.endpointId"></a>

```python
endpoint_id: str
```

- *Type:* str

---

##### `endpoint_service_name`<sup>Required</sup> <a name="endpoint_service_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.property.endpointServiceName"></a>

```python
endpoint_service_name: str
```

- *Type:* str

---

##### `error_message`<sup>Required</sup> <a name="error_message" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.property.errorMessage"></a>

```python
error_message: str
```

- *Type:* str

---

##### `private_endpoint_ip_address`<sup>Required</sup> <a name="private_endpoint_ip_address" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.property.privateEndpointIpAddress"></a>

```python
private_endpoint_ip_address: str
```

- *Type:* str

---

##### `private_link_service_resource_id`<sup>Required</sup> <a name="private_link_service_resource_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.property.privateLinkServiceResourceId"></a>

```python
private_link_service_resource_id: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResultsOutputReference.property.internalValue"></a>

```python
internal_value: DataMongodbatlasPrivatelinkEndpointsServiceServerlessResults
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceServerless.DataMongodbatlasPrivatelinkEndpointsServiceServerlessResults">DataMongodbatlasPrivatelinkEndpointsServiceServerlessResults</a>

---



